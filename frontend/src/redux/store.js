import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './slices/roomSlice';
import bookingReducer from './slices/bookingSlice';
import customerReducer from './slices/customerSlice';
import auditLogReducer from './slices/auditLogSlice';

const store = configureStore({
    reducer: {
        rooms: roomReducer,
        bookings: bookingReducer,
        customers: customerReducer,
        auditLogs: auditLogReducer,
    },
});

export default store;
