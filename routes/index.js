const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.get('/hotel/:id', homeController.hotel);
router.use('/hotels', require('./hotels'));
router.use('/bookings', require('./bookings'));
router.use('/users', require('./users'));
// router.use('/likes', require('./likes'));


// router.use('/api', require('./api'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

const Hotel_By_city=require('../models/hotel_city');
module.exports = router;