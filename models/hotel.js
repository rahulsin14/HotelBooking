const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city:{
        type:String,
        required:true
    },
    views: {
        type: Number,
        required: true
    },
    bookings: {
        type: Number,
        required: true
    },
    draft_bookings: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
// list1=['Goa1','Goa2','Goa3','Goa4','Goa5'];
// for(hotel of list1){
//     var h=Hotel.create({
//         name:hotel,
//         city:'Goa',
//         views:1,
//         draft_bookings:0,
//         bookings:0
//     });
// }
// list2=['Mumbai1','Mumbai2','Mumbai3','Mumbai4','Mumbai5'];
// for(hotel of list2){
//     var h=Hotel.create({
//         name:hotel,
//         city:'Mumbai',
//         views:1,
//         draft_bookings:0,
//         bookings:0
//     });
// }