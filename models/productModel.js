import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    stepValue: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: false
    },
    defaultQty: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Products = mongoose.model('Products', productSchema)

export default Products