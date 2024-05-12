const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Hotel', HotelSchema);