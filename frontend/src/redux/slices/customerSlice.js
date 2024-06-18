import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
    const response = await api.get('/customers');
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
