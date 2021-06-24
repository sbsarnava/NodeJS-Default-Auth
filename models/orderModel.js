import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    address: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        add1: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: false,
            default: 'Purulia'
        },
        state: {
            type: String,
            required: false,
            default: 'West Bengal'
        }
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        cost: {
            type: Number,
            required: true
        }
    }],
    delivered: {
        type: Boolean,
        default: false,
        required: false
    }
})

const Order = mongoose.model('Order', orderSchema)

export default Order