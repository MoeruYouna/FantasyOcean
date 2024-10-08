const mongoose = require('mongoose');

const FishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    catID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category F', 
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    
    price: {
        type: Number,
        required: true,
    },
    
    quantity: {
        type: Number,
        required: true,
    }
});

const Fish = mongoose.model('Fish', FishSchema);

module.exports = Fish;
