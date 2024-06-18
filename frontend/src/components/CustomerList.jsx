import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const CustomerList = ({ customers }) => (
    <div>
        <Typography variant="h4" gutterBottom align="center">Kunder</Typography>
        <List>
            {customers.map(customer => (
                <ListItem key={customer.id}>
                    <ListItemText primary={customer.name} secondary={customer.email} />
                </ListItem>
            ))}
        </List>
    </div>
);

export default CustomerList;
