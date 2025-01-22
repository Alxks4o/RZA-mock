const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    people: {
        type:Number,
        required:true
    },
    checkInDate: {
        type:Date,
        required:true
    },
    checkOutDate: {
        type:Date,
        required:true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
