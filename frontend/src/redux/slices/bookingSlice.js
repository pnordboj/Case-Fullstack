import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async () => {
    const response = await api.get('/bookings');
    return response.data;
});

const bookingSlice = createSlice({
    name: 'bookings',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBookings.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default bookingSlice.reducer;
