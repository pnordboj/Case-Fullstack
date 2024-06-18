import { supabase } from '../config/supabaseClient';

export const getAllAuditLogs = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('audit_logs')
            .select('*, room:rooms(*), customer:customers(*)');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createAuditLog = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('audit_logs')
            .insert([req.body]);
        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const logAudit = async (customer_id, action) => {
    try {
        const { data, error } = await supabase
            .from('audit_logs')
            .insert([{ customer_id, action }]);
        if (error) throw error;
    } catch (error) {
        console.error('Error logging audit:', error.message);
    }
};
