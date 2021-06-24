import express from 'express'
import Products from '../models/productModel.js'

const router = express.Router()


router.route('/products').get(async (req, res) => {
    try {
        const products = await Products.find({})
        res.json(products)
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
})

router.route('/products/:id').get(async (req, res) => {
    try {
        const product = await Products.findById(req.params.id)
        if (product) {
            res.json(product)
        } else {
            res.status(404).json({
                err: 'Product not Found'
            })
        }
    } catch (e) {
        res.json({
            err: e.message
        })
    }
})




export default router