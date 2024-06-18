import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from '../redux/slices/roomSlice';
import RoomList from '../components/RoomList';

const Rooms = () => {
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms);

    useEffect(() => {
        dispatch(fetchRooms());
    }, [dispatch]);

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <RoomList rooms={rooms} />
        </Container>
    );
};

export default Rooms;
