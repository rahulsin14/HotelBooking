const express = require('express');

const router = express.Router();
const hotelController = require('../controllers/hotel_controller');

// console.log('router loaded');
// router.get('/', homeController.home);
router.get('/:id', hotelController.book);
module.exports = router;