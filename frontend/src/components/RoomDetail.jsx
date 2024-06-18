import React, { useEffect, useState } from 'react';
import { Typography, Container } from '@mui/material';
import api from '../api';

const RoomDetail = ({ match }) => {
    const [room, setRoom] = useState(null);

    useEffect(() => {
        api.get(`/rooms/${match.params.id}`).then(response => setRoom(response.data));
    }, [match.params.id]);

    if (!room) return <div>Laster...</div>;

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4">Rom {room.room_number}</Typography>
            <Typography variant="body1">Kategori: {room.category}</Typography>
            <Typography variant="body1">Status: {room.status}</Typography>
        </Container>
    );
};

export default RoomDetail;
