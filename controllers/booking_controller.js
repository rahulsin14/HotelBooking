const Booking= require('../models/booking')
const Hotel= require('../models/hotel')
const Hotel_By_city=require('../models/hotel_city');
module.exports.complete=async function(req,res){
    // var hotels=await Hotel.find({});
    try{
        let hotel=await Hotel.findByIdAndUpdate(req.params.id,{$inc:{bookings:1,draft_bookings:-1}});
        // let booking=await Booking.create(req.body);
        let city=hotel.city;
        let hotels=await Hotel_By_city.find({city:city});
        let booking = await Booking.create({
            email: req.body.email,
            name:req.body.name,
            number_of_rooms:req.body.number_of_rooms,
            hotel:hotel.name,
            contact_number:req.body.contact_number,
            user: req.user._id
        });
        await req.user.bookings.push(booking);
        req.user.save();
        return res.render('complete', {
            title: "Booking Complete Successfullly",
            booking:booking,
            rec: hotels
        });
    }catch(err){
        console.log('Error', err);
        return;
    }
}