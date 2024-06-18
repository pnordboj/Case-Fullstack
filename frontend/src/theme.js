import { createTheme } from '@mui/material/styles';
import { amber, blue, deepOrange, grey, indigo, pink } from '@mui/material/colors';

// Aldri laget en egen theme i MUI så får se om det her blir bra! :)
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
        main: indigo[500],
    },
    secondary: {
        main: pink[500],
    },
    background: {
        default: grey[50],
        paper: '#ffffff',
    },
    text: {
        primary: '#333333',
        secondary: grey[600],
    },
    },
    typography: {
        fontFamily: 'Quicksand, Arial, sans-serif',
    h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
    },
    h2: {
        fontSize: '2rem',
        fontWeight: 600,
    },
    h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
    },
    body1: {
        fontSize: '1rem',
        fontWeight: 400,
    },
    body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
    },
    },
    spacing: 8,
    components: {
    MuiButton: {
        styleOverrides: {
        root: {
            borderRadius: '12px',
        },
        },
    },
    MuiCard: {
        styleOverrides: {
        root: {
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
        },
    },
    MuiAppBar: {
        styleOverrides: {
        root: {
            borderRadius: '0 0 20px 20px',
        },
        },
    },
    },
});

export default theme;
