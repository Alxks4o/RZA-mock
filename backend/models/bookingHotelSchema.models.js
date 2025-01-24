const mongoose = require('mongoose');

const bookingHotelSchema = new mongoose.Schema({
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
    },
    user: {
        type:String,
        required:true
    },
    roomnum:{
        type:String,
    }
});

const BookingHotel = mongoose.model('BookingHotel', bookingHotelSchema);

module.exports = BookingHotel;
