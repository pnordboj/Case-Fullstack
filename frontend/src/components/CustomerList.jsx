import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

const CustomerList = ({ customers }) => (
    <div>
        <Typography variant="h4">Customers</Typography>
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
