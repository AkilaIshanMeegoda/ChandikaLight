const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema =  new Schema({
    clientName:{
        type:String,
        required:true
    },
    clientEmail:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    eventType:{
        type:String,
        required:true
    },
    eventDescription:{
        type:String,
        required:true
    },
    eventDate:{
        type:String,
        required:true
    },
    venueLocation:{
        type:String,
        required:true
    },
    receipt:{
        type:String,
        default: 'empty'
    },
    paymentAmount:{
        type:String,
        required:true
    },
    reservationStatus:{
        type:String,
        default: 'pending'
    }
});

const Reservation = mongoose.model("reservation",reservationSchema);

module.exports = Reservation;