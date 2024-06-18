import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
    const response = await axios.get('/api/customers');
    return response.data;
});

const customerSlice = createSlice({
    name: 'customers',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default customerSlice.reducer;
