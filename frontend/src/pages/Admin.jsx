import React from 'react';
import { Container } from '@material-ui/core';
import RoomList from '../components/RoomList';
import CustomerList from '../components/CustomerList';

const Admin = ({ rooms, customers }) => (
    <Container>
        <RoomList rooms={rooms} />
        <CustomerList customers={customers} />
    </Container>
);

export default Admin;
