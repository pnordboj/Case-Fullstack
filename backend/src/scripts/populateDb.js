// Formålet med dette skriptet er å fylle databasen med testdata for å kunne teste funksjonalitet

const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabaseUrl = "https://kylvsurihnmnzuqvauvd.supabase.co";
const supabaseAnonKey = `${process.env.SUPABASE_ANON_KEY}`;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const seedData = async () => {
    try {
        const customers = [
            { id: 1, name: 'Ola Nordmann', email: 'ola@example.com', password: 'password123', loyalty_points: 100 },
            { id: 2, name: 'Kari Nordmann', email: 'kari@example.com', password: 'password456', loyalty_points: 200 },
            { id: 3, name: 'Per Hansen', email: 'per.hansen@example.com', password: 'password789', loyalty_points: 150 },
            { id: 4, name: 'Anne Larsen', email: 'anne.larsen@example.com', password: 'password321', loyalty_points: 50 },
            { id: 5, name: 'Knut Olsen', email: 'knut@example.com', password: 'password654', loyalty_points: 75 },
            { id: 6, name: 'Hilde Pedersen', email: 'hilde@example.com', password: 'password987', loyalty_points: 125 }
        ];
        for (const customer of customers) {
            const { data, error } = await supabase.from('customers').insert(customer);
            if (error) throw error;
        }

        const rooms = [
            { id: 101, room_number: '101', category: 'enkeltrom', status: 'ledig' },
            { id: 102, room_number: '102', category: 'dobbeltrom', status: 'ledig' },
            { id: 201, room_number: '201', category: 'enkeltrom', status: 'opptatt' },
            { id: 202, room_number: '202', category: 'dobbeltrom', status: 'opptatt' },
            { id: 301, room_number: '301', category: 'enkeltrom', status: 'opptatt' },
            { id: 302, room_number: '302', category: 'dobbeltrom', status: 'opptatt' }
        ];
        for (const room of rooms) {
            const { data, error } = await supabase.from('rooms').insert(room);
            if (error) throw error;
        }

        const bookings = [
            { id: 1, room_id: 101, customer_id: 1, start_date: '2024-07-01', end_date: '2024-07-05', status: 'bekreftet' },
            { id: 2, room_id: 102, customer_id: 2, start_date: '2024-06-18', end_date: '2024-06-30', status: 'sjekket inn' },
            { id: 3, room_id: 201, customer_id: 3, start_date: '2024-07-03', end_date: '2024-07-07', status: 'bekreftet' },
            { id: 4, room_id: 202, customer_id: 4, start_date: '2024-07-04', end_date: '2024-07-08', status: 'kansellert' },
            { id: 5, room_id: 301, customer_id: 5, start_date: '2024-07-05', end_date: '2024-07-09', status: 'bekreftet' },
            { id: 6, room_id: 302, customer_id: 6, start_date: '2024-07-06', end_date: '2024-07-10', status: 'bekreftet' }
        ];
        for (const booking of bookings) {
            const { data, error } = await supabase.from('bookings').insert(booking);
            if (error) throw error;
        }

        const auditLogs = [
            { id: 1, room_id: 101, customer_id: 1, action: 'Opprettet reservasjon', timestamp: '2024-06-15T12:00:00Z' },
            { id: 2, room_id: 102, customer_id: 2, action: 'Sjekket inn', timestamp: '2024-06-18T15:00:00Z' },
            { id: 3, room_id: 201, customer_id: 3, action: 'Opprettet reservasjon', timestamp: '2024-06-19T09:00:00Z' },
            { id: 4, room_id: 202, customer_id: 4, action: 'Kansellert reservasjon', timestamp: '2024-06-20T18:00:00Z' },
            { id: 5, room_id: 301, customer_id: 5, action: 'Opprettet reservasjon', timestamp: '2024-06-21T14:00:00Z' },
            { id: 6, room_id: 302, customer_id: 6, action: 'Opprettet reservasjon', timestamp: '2024-06-22T10:00:00Z' }
        ];
        for (const auditLog of auditLogs) {
            const { data, error } = await supabase.from('audit_logs').insert(auditLog);
            if (error) throw error;
        }

        console.log('Test data seeded successfully!');
    } catch (error) {
        console.error('Error seeding test data:', error.message);
    }
};

seedData();
