import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

const AuditLog = ({ logs }) => (
    <div>
        <Typography variant="h4">Audit Logs</Typography>
        <List>
            {logs.map(log => (
                <ListItem key={log.id}>
                    <ListItemText primary={log.action} secondary={`Room ID: ${log.room_id}, Customer ID: ${log.customer_id}, Timestamp: ${log.timestamp}`} />
                </ListItem>
            ))}
        </List>
    </div>
);

export default AuditLog;
