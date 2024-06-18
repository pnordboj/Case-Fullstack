import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    const response = await axios.get('/api/rooms');
    return response.data;
});

const roomSlice = createSlice({
    name: 'rooms',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default roomSlice.reducer;
