import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRooms } from './redux/slices/roomSlice';
import { fetchBookings } from './redux/slices/bookingSlice';
import { fetchCustomers } from './redux/slices/customerSlice';
import { fetchAuditLogs } from './redux/slices/auditLogSlice';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Bookings from './pages/Bookings';
import Customers from './pages/Customers';
import AuditLogs from './pages/AuditLogs';

function App() {
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/audit-logs" element={<AuditLogs />} />
            </Routes>
        </div>
    );
}

export default App;
