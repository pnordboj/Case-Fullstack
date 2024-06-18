import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuditLogs = createAsyncThunk('auditLogs/fetchAuditLogs', async () => {
    const response = await axios.get('/api/audit-logs');
    return response.data;
});

const auditLogSlice = createSlice({
    name: 'auditLogs',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAuditLogs.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default auditLogSlice.reducer;
