import express from 'express'
import Products from '../models/productModel.js'

const router = express.Router()


router.route('/add-product').post(async (req, res) => {
    const { itemName, cost, stepValue, unit, category, stock } = req.body

    try {
        const added_product = await Products.create({
            itemName,
            cost,
            stepValue,
            unit,
            category,
            stock
        })
        if (added_product) {
            res.status(201).json(added_product)
        } else {
            res.status(402).json({
                err: 'Invalid Data'
            })
        }
    } catch (e) {
        res.json({
            error: e.message
        })
    }
})




export default router