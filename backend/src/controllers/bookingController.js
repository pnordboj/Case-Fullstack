import { supabase } from '../config/supabaseClient';
import { logAudit } from './auditController';

export const getAllBookings = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .select('*, room:rooms(*), customer:customers(*)');
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createBooking = async (req, res) => {
    try {
        const { room_id, customer_id, start_date, end_date, status } = req.body;

        const { data: bookings } = await supabase
            .from('bookings')
            .select('*')
            .eq('room_id', room_id)
            .lte('start_date', end_date)
            .gte('end_date', start_date);

        if (bookings.length > 0) {
            await supabase
                .from('waiting_list')
                .insert([{ room_id, customer_id, start_date, end_date }]);

            res.status(200).json({ message: 'Rommet er full booket, du er lagt på ventelisten' });
        } else {
            const { data, error } = await supabase
                .from('bookings')
                .insert([{ room_id, customer_id, start_date, end_date, status }]);

            if (error) throw error;

            const { data: customerData, error: customerError } = await supabase
                .from('customers')
                .select('email')
                .eq('id', customer_id)
                .single();

            if (customerError) throw customerError;

            sendEmail(customerData.email, 'Booking bekreftet', `Din booking for rom ${room_id} er bekreftet!`);

            // Log audit action
            await logAudit(customer_id, `Opprettet reservasjon for rom ${room_id} fra ${start_date} til ${end_date}`);

            res.status(201).json(data);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getBookingById = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .select('*, room:rooms(*), customer:customers(*)')
            .eq('id', req.params.id);
        if (error) throw error;
        if (data.length === 0) return res.status(404).json({ error: 'Fant ingen reservasjoner' });
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateBooking = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .update(req.body)
            .eq('id', req.params.id);
        if (error) throw error;
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteBooking = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .delete()
            .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
