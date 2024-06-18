import React from 'react';
import { Typography, Container, Card, CardContent, Button } from '@mui/material';

const Home = () => (
    <Container>
        <Typography variant="h2" gutterBottom>
            Velkommen til Hotellet!
        </Typography>
        <Card variant="outlined">
        <CardContent>
            <Typography variant="h5" component="div">
                Opplev luksus, komfort og god service på vårt hotell.   
            </Typography>
            <Typography variant="body2">
                Vi har rom for enhver smak og lommebok.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Reserver rom
            </Button>
        </CardContent>
        </Card>
    </Container>
);

export default Home;
