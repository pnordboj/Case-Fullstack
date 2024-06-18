import React from 'react';
import { Container } from '@mui/material';
import RoomList from '../components/RoomList';
import CustomerList from '../components/CustomerList';
import { useSelector } from 'react-redux';

const Admin = () => {
    const rooms = useSelector((state) => state.rooms);
    const customers = useSelector((state) => state.customers);

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <RoomList rooms={rooms} />
            <CustomerList customers={customers} />
        </Container>
    );
};

export default Admin;
