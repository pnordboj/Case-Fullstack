import React, { useEffect, useState } from 'react';
import { Typography, Container } from '@mui/material';
import api from '../api';

const CustomerDetail = ({ match }) => {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        api.get(`/customers/${match.params.id}`).then(response => setCustomer(response.data));
    }, [match.params.id]);

    if (!customer) return <div>Laster...</div>;

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4">{customer.name}</Typography>
            <Typography variant="body1">Epost: {customer.email}</Typography>
            <Typography variant="body1">Lojalitets poeng: {customer.loyalty_points}</Typography>
        </Container>
    );
};

export default CustomerDetail;
