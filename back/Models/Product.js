const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

    images: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    brand : {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});


const Product = mongoose.model('Product', productSchema);
module.exports = Product