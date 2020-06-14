const Hotel=require('../models/hotel');

module.exports.book=async function(req,res){
    let h = await Hotel.findByIdAndUpdate(req.params.id,{$inc:{draft_bookings:1}});
    try{
        if(req.isAuthenticated()){
            return res.render('booking', {
                title: "Book the hotel",
                hotel:h
            });
        }
        return res.render('sign_in', {
            title: "Hotel Booking | Sign In"
        })
        
    }catch(err){
        console.log('Error', err);
        return;
    }
}