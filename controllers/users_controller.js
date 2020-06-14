const User = require('../models/user');
const fs = require('fs');
const path = require('path');
module.exports.profile = async function(req, res){
    if (req.isAuthenticated()){
        let user=await User.findById(req.user.id).populate('bookings');
        return res.render('profile', {
            title: 'User Profile',
            bookings: user.bookings
        });
    }
    return res.render('sign_in', {
        title: "Hotel Booking | Sign Up"
    })
       

}
// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/');
    }


    return res.render('sign_up', {
        title: "Hotel Booking | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        return res.redirect('/home');
    }
    return res.render('sign_in', {
        title: "Hotel Booking | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){

        if (!user){
            User.create(req.body, function(err, user){

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();


    return res.redirect('/');
}