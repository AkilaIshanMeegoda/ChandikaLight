const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const financeSchema = new Schema({
    invoiceID: {
        type: Number,
        required: true,
    },
    transactionType: {
        type: String,
        required: true,
        enum: ['income','expense']
    },
    category: {
        type: String,
        required: true,
        enum: ['equipment rental', 'service fee', 'hut rental', 'maintenance']
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['card','cash','online payment']
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: ['pending','success']
    },
    description: {
        type: String,
        required: true,
    },
    invoiceImage:{
        type: String,
    }
})

const Finance = mongoose.model("Finance", financeSchema);

module.exports = Finance;