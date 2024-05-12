const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    Apple: {
        type: String,
        required: true
    },
    Samsung: {
        type: String,
        required: true
    },
    Tesla: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Stock', StockSchema);