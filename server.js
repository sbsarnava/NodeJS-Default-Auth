import express from 'express'
import db from './config/db.js'

//Routes goes here
import productRouter from './routes/productRouter.js'
import adminRouter from './routes/adminRouter.js'
import orderRouter from './routes/orderRouter.js'
import authRouter from './routes/authRouter.js'
import pass from './config/passport.js'

const app = express()
app.use(express.json())

db()


app.use('/', productRouter)

app.use('/auth', authRouter)

app.get('/profile', pass.authenticate('jwt', { session: false }),
    function (req, res) {
        res.json(req.user)
    }
);



//Protected by authentication middlware
app.use('/order', pass.authenticate('jwt', { session: false }), orderRouter)


//To be protected by authentication middleware
app.use('/admin', adminRouter)




app.listen(5000, console.log("The Server is running at 5000"))