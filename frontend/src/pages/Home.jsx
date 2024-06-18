import React from 'react';
import { Typography, Container, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h2" gutterBottom align="center">
            Velkommen til Hotellet!
        </Typography>
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Opplev luksus, komfort og god service på vårt hotell.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Vi har rom for enhver smak og lommebok.
                </Typography>
                <Button
                    component={Link}
                    to="/bookings"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Reserver rom
                </Button>
            </CardContent>
        </Card>
    </Container>
);

export default Home;
