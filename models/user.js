const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    bookings:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'
    }],
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const User = mongoose.model('User', userSchema);

module.exports = User;