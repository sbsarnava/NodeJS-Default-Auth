import express from 'express'
import Order from '../models/orderModel.js'

const router = express.Router()



router.route('/checkout').post(async (req, res) => {
    const { name, phone, address, city, state, products } = req.body
    const user = req.user
    var arrProducts = new Array()

    products.map(p => arrProducts.push({
        product: p.id,
        quantity: p.qty,
        cost: p.cost
    }))

    const order = await Order.create({
        user: user._id,

        address: {
            name,
            phone,
            add1: address,
            city,
            state,
        },
        products: arrProducts
    }).catch(e => console.log(e))

    if (order) {
        res.json(order)
    } else {
        res.json({
            message: "Order Cannot be created"
        })
        throw new Error("Data invalid")
    }
})





export default router