const mongoose = require("mongoose");

const financialRecord = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
});

const financialRecordModel = mongoose.model("financialRecord", financialRecord);
module.exports = financialRecordModel;
