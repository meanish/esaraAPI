const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({          //Schema means defining the data type

    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        enum: {               //enum restrict comapny to be within these not more
            values: ["mobile", "laptop"],
            message: `{VALUE} is not supported`,
        },

    },
    price: {
        type: Number,
        required: [true, "Price must be provided"],
    },

    featured: {
        type: Boolean,
        default: false,
    },

    rating: {
        type: Number,
        default: 23,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

    company: {
        type: String,
        enum: {               //enum restrict comapny to be within these not more
            values: ["apple", "samsung", "dell", "mi", "nokia"],
            message: `{VALUE} is not supported`,
        },
    },
});

module.exports = mongoose.model("Product", productSchema); // The value name in '' must be singular