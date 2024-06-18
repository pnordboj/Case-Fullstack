import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { supabase } from '../config/supabaseClient';

export const getAllCustomers = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('customers')
            .select('*');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createCustomer = async (req, res) => {
    try {
        const { password, ...rest } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const { data, error } = await supabase
            .from('customers')
            .insert([{ ...rest, password: hashedPassword }]);
        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCustomerById = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('customers')
            .select('*')
            .eq('id', req.params.id);
        if (error) throw error;
        if (data.length === 0) return res.status(404).json({ error: 'Customer not found' });
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('customers')
            .update(req.body)
            .eq('id', req.params.id);
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCustomer = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('customers')
            .delete()
            .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { data, error } = await supabase
            .from('customers')
            .select('*')
            .eq('email', email);
        if (error) throw error;
        if (data.length === 0) return res.status(404).json({ error: 'Invalid email or password' });

        const customer = data[0];
        const isPasswordValid = await bcrypt.compare(password, customer.password);
        if (!isPasswordValid) return res.status(401).json({ error: 'Invalid email or password' });

        const token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
