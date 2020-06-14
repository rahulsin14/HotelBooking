const mongoose = require('mongoose');

const hSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        unique: true
    },
    hotels:[{
        type:String
    }]
}, {
    timestamps: true
});

const Hotel_by_City= mongoose.model('Hotel_By_City', hSchema);

module.exports = Hotel_by_City;
// module.exports = Hotel;
r=async function(){
    list1=['Goa1','Goa2','Goa3','Goa4','Goa5'];
    let h=await Hotel_by_City.create({
        city:'Goa',
    })
    for(hotel of list1){
        await h.hotels.push(hotel);
    }
    
    list2=['Mumbai1','Mumbai2','Mumbai3','Mumbai4','Mumbai5'];
    let h1=await Hotel_by_City.create({
        city:'Mumbai',
    })
    for(hotel of list2){
        await h1.hotels.push(hotel);
    }
}
r();
