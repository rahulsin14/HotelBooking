const mongoose = require('mongoose');
const User=require('./user');
const bookingSchema = new mongoose.Schema({
    hotel:{
        type: String,
        required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    number_of_rooms: {
        type: Number,
        required: true
    },
    contact_number:{
        type:Number,
        required:true
    }
}, {
    timestamps: true
});
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;