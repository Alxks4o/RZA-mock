const mongoose = require('mongoose');

const bookingZooSchema = new mongoose.Schema({
    forename: {
        type: String,
        required:true
    },
    surname: {
        type:String,
        required:true
    },
    adults:{
        type:Number,
        required:true
    },
    children:{
        type:Number,
        required:true
    },
    date: {
        type:String,
        required:true
    },
    user: {
        type:String,
        required:true
    }
});

const BookingZoo = mongoose.model('BookingZoo', bookingZooSchema);

module.exports = BookingZoo;
