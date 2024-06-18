import { supabase } from '../config/supabaseClient';

export const getAllRooms = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('rooms')
            .select('*');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createRoom = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('rooms')
            .insert([req.body]);
        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getRoomById = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('rooms')
            .select('*')
            .eq('id', req.params.id);
        if (error) throw error;
        if (data.length === 0) return res.status(404).json({ error: 'Room not found' });
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateRoom = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('rooms')
            .update(req.body)
            .eq('id', req.params.id);
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteRoom = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('rooms')
            .delete()
            .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
