import React from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import CustomerList from '../components/CustomerList';

const Customers = () => {
    const customers = useSelector((state) => state.customers);

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <h1>Kunder</h1>
            <CustomerList customers={customers} />
        </Container>
    );
};

export default Customers;
