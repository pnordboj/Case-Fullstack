import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const RoomDetail = ({ match }) => {
    const [room, setRoom] = useState(null);

    useEffect(() => {
        axios.get(`/api/rooms/${match.params.id}`).then(response => setRoom(response.data));
    }, [match.params.id]);

    if (!room) return <div>Loading...</div>;

    return (
        <div>
            <Typography variant="h4">Room {room.room_number}</Typography>
            <Typography variant="body1">Category: {room.category}</Typography>
            <Typography variant="body1">Status: {room.status}</Typography>
        </div>
    );
};

export default RoomDetail;
