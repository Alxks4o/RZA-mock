const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    forename: {
        type: String,
        required:true
    },
    surname: {
        type:String,
        required:true
    },
    people: {
        type:Number,
        required:true
    },
    checkInDate: {
        type:String,
        required:true
    },
    checkOutDate: {
        type:String,
        required:true
    }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
