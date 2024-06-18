import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Middels Hotellet
                </Typography>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="github"
                    href="https://github.com/pnordboj/Case-Fullstack"
                    target="_blank"
                    sx={{ mr: 2 }}
                >
                    <GitHubIcon />
                </IconButton>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/rooms">Rom</Button>
                <Button color="inherit" component={Link} to="/bookings">Reservasjoner</Button>
                <Button color="inherit" component={Link} to="/customers">Kunder</Button>
                <Button color="inherit" component={Link} to="/audit-logs">Audit Logs</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
