import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRooms } from './redux/slices/roomSlice';
import { fetchBookings } from './redux/slices/bookingSlice';
import { fetchCustomers } from './redux/slices/customerSlice';
import { fetchAuditLogs } from './redux/slices/auditLogSlice';
import Navbar from './components/Navbar';

function App({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRooms());
        dispatch(fetchBookings());
        dispatch(fetchCustomers());
        dispatch(fetchAuditLogs());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default App;
