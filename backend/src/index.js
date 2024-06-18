import { Router } from 'itty-router';
import dotenv from 'dotenv';
import { getAllRooms, createRoom, getRoomById, updateRoom, deleteRoom } from './controllers/roomController';
import { getAllBookings, createBooking, getBookingById, updateBooking, deleteBooking } from './controllers/bookingController';
import { getAllCustomers, createCustomer, getCustomerById, updateCustomer, deleteCustomer, login } from './controllers/customerController';
import { getAllAuditLogs, createAuditLog } from './controllers/auditController';
import { authenticateToken } from './middlewares/authMiddleware';

dotenv.config();

const router = Router();

// Define routes
router.get('/api/rooms', getAllRooms);
router.post('/api/rooms', createRoom);
router.get('/api/rooms/:id', getRoomById);
router.put('/api/rooms/:id', updateRoom);
router.delete('/api/rooms/:id', deleteRoom);

router.get('/api/bookings', getAllBookings);
router.post('/api/bookings', createBooking);
router.get('/api/bookings/:id', getBookingById);
router.put('/api/bookings/:id', updateBooking);
router.delete('/api/bookings/:id', deleteBooking);

router.get('/api/customers', getAllCustomers);
router.post('/api/customers', createCustomer);
router.get('/api/customers/:id', getCustomerById);
router.put('/api/customers/:id', updateCustomer);
router.delete('/api/customers/:id', deleteCustomer);
router.post('/api/customers/login', login);

router.get('/api/audit-logs', getAllAuditLogs);
router.post('/api/audit-logs', createAuditLog);

// Default route
router.all('*', () => new Response('Not Found', { status: 404 }));

addEventListener('fetch', event => {
	event.respondWith(router.handle(event.request));
});
