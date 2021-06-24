import express from 'express'
const router = express.Router()
import User from '../models/userModel.js'
import generateToken from '../utils/token.js'

router.route('/login').post(async (req, res) => {
    const { emailorphone, password } = req.body
    const user = await User.findOne({ emailorphone })
    if (user) {
        const passwordMatched = await user.matchPassword(password)
        if (passwordMatched) {
            res.json({
                name: user.name,
                emailorphone: user.emailorphone,
                token: generateToken(user._id)
            })
        }
    } else {
        res.json("User not Found")
    }
})


router.route('/register').post(async (req, res) => {
    const emailorphone = req.body.emailorphone
    const name = req.body.name
    const password = req.body.password
    const userExists = await User.exists({ emailorphone }).catch(e => { console.log(e.message) })
    if (userExists) {
        res.json({
            err: 'User already exists'
        })
    } else {
        const newUser = await User.create({ name, password, emailorphone }).catch(e => { console.log(e) })
        if (newUser) {
            res.json({
                name: newUser.name,
                emailorphone: newUser.emailorphone,
                token: generateToken(newUser._id)
            })
        }
    }
})






export default router