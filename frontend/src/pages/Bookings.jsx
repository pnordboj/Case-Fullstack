import React from 'react';
import BookingForm from '../components/BookingForm';

const Bookings = ({ rooms, customers }) => (
    <div>
        <BookingForm rooms={rooms} customers={customers} />
    </div>
);

export default Bookings;
