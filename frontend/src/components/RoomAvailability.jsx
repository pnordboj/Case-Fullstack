import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import api from '../api';
import BookingForm from './BookingForm';

const RoomAvailability = () => {
    const [rooms, setRooms] = useState([]);
    const [customers, setCustomers] = useState([]);

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

        fetchRooms();
        fetchCustomers();
    }, []);

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
                Tilgjengelige rom
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                {rooms.map(room => (
                    <Grid item xs={12} sm={6} key={room.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6">
                                    Rom {room.room_number}
                                </Typography>
                                <Typography variant="body2">
                                    Kategori: {room.category}
                                </Typography>
                                <Chip
                                    label={room.status === 'available' ? 'Tilgjengelig' : 'Reservert'}
                                    color={room.status === 'available' ? 'success' : 'error'}
                                    sx={{ mt: 1 }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <BookingForm rooms={rooms} customers={customers} />
        </Container>
    );
};

export default RoomAvailability;
