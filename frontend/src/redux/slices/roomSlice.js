import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    const response = await api.get('/rooms');
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
