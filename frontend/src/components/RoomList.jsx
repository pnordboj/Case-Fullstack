import React from 'react';
import { List, ListItem, ListItemText, Typography, Card, CardContent } from '@mui/material';

const RoomList = ({ rooms }) => (
    <div>
        <Typography variant="h4" gutterBottom>
            Rom Oversikt
        </Typography>
        <List>
            {rooms.map((room) => (
                <Card key={room.id} variant="outlined" sx={{ mb: 2 }}>
                    <CardContent>
                        <ListItem>
                            <ListItemText primary={`Room ${room.room_number}`} secondary={room.category} />
                        </ListItem>
                    </CardContent>
                </Card>
            ))}
        </List>
    </div>
);

export default RoomList;
