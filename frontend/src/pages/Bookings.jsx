import React, { useEffect, useState } from 'react';
import api from '../api';
import { Container, Box } from '@mui/material';
import BookingForm from '../components/BookingForm';

const Bookings = () => {
    const [rooms, setRooms] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await api.get('/rooms');
                setRooms(response.data);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        const fetchCustomers = async () => {
            try {
                const response = await api.get('/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        const fetchBookings = async () => {
            try {
                const response = await api.get('/bookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchRooms();
        fetchCustomers();
        fetchBookings();
    }, []);

    return (
        <Container maxWidth="md">
            <Box mt={4}>
                <BookingForm rooms={rooms} customers={customers} bookings={bookings} />
            </Box>
        </Container>
    );
};

export default Bookings;
