import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const CustomerDetail = ({ match }) => {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        axios.get(`/api/customers/${match.params.id}`).then(response => setCustomer(response.data));
    }, [match.params.id]);

    if (!customer) return <div>Loading...</div>;

    return (
        <div>
            <Typography variant="h4">{customer.name}</Typography>
            <Typography variant="body1">Email: {customer.email}</Typography>
            <Typography variant="body1">Loyalty Points: {customer.loyalty_points}</Typography>
        </div>
    );
};

export default CustomerDetail;
