import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const AuditLogList = ({ logs }) => (
    <div>
        <Typography variant="h4" gutterBottom align="center">Audit Logs</Typography>
        <List>
            {logs.map(log => (
                <ListItem key={log.id}>
                    <ListItemText primary={log.action} secondary={`Room ID: ${log.room_id}, Customer ID: ${log.customer_id}, Timestamp: ${log.timestamp}`} />
                </ListItem>
            ))}
        </List>
    </div>
);

export default AuditLogList;
