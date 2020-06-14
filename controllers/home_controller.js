const Hotel= require('../models/hotel')
module.exports.home=async function(req,res){
    var hotels=await Hotel.find({});
    try{
        return res.render('home', {
            title: "Hotel Booking System",
            list:hotels
        });
    }catch(err){
        console.log('Error', err);
        return;
    }
}
module.exports.hotel=async function(req,res){
    try{
        let h = await Hotel.findByIdAndUpdate(req.params.id,{$inc:{views:1}});
        // console.log(h);
        return res.render('hotel', {
            title: h.name,
            data:h
        });
    }catch(err){
        console.log('Error', err);
        return;
    }
}