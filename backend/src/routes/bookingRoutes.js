const express = require('express');
const {
    getAllBookings,
    createBooking,
    getBookingById,
    updateBooking,
    deleteBooking,
} = require('../controllers/bookingController');

const router = express.Router();

router.get('/', getAllBookings);
router.post('/', createBooking);
router.get('/:id', getBookingById);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
