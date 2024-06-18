import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const fetchAuditLogs = createAsyncThunk('auditLogs/fetchAuditLogs', async () => {
    const response = await api.get('/audit-logs');
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
