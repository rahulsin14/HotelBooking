const express = require('express');

const router = express.Router();
const bookingController = require('../controllers/booking_controller');
router.post('/complete/:id', bookingController.complete);
module.exports = router;