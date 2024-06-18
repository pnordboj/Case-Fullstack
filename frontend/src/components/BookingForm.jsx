import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box, Typography, Grid, Alert } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import api from '../api';

const BookingForm = ({ rooms, customers, bookings }) => {
    const [bookingAlert, setBookingAlert] = useState(null);

    const formik = useFormik({
        initialValues: {
            room_id: '',
            customer_id: '',
            start_date: null,
            end_date: null,
            status: 'confirmed',
        },
        validationSchema: Yup.object({
            room_id: Yup.number().required('Required'),
            customer_id: Yup.number().required('Required'),
            start_date: Yup.date().required('Required'),
            end_date: Yup.date().required('Required'),
            status: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                await api.post('/bookings', values);
                setBookingAlert({ type: 'success', message: 'Booking created successfully!' });
                setTimeout(() => setBookingAlert(null), 5000); // Clear the alert after 5 seconds
            } catch (error) {
                setBookingAlert({ type: 'error', message: 'Error creating booking. Please try again.' });
                setTimeout(() => setBookingAlert(null), 5000); // Clear the alert after 5 seconds
            }
        },
    });

    const getDisabledDates = (roomId) => {
        const roomBookings = bookings.filter((booking) => booking.room_id === roomId);
        const disabledDates = [];

        roomBookings.forEach((booking) => {
            let currentDate = new Date(booking.start_date);
            const endDate = new Date(booking.end_date);

            while (currentDate <= endDate) {
                disabledDates.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            }
        });

        return disabledDates;
    };

    const handleRoomChange = (event) => {
        formik.setFieldValue('room_id', event.target.value);
        formik.setFieldValue('start_date', null);
        formik.setFieldValue('end_date', null);
    };

    return (
        <Box mt={4}>
            {bookingAlert && (
                <Alert severity={bookingAlert.type} sx={{ mb: 2 }}>
                    {bookingAlert.message}
                </Alert>
            )}
            <Typography variant="h4" gutterBottom>
                Book a Room
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel>Room</InputLabel>
                            <Select
                                name="room_id"
                                value={formik.values.room_id}
                                onChange={handleRoomChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.room_id && Boolean(formik.errors.room_id)}
                            >
                                {rooms.map((room) => (
                                    <MenuItem key={room.id} value={room.id}>
                                        {room.room_number}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel>Customer</InputLabel>
                            <Select
                                name="customer_id"
                                value={formik.values.customer_id}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.customer_id && Boolean(formik.errors.customer_id)}
                            >
                                {customers.map((customer) => (
                                    <MenuItem key={customer.id} value={customer.id}>
                                        {customer.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DatePicker
                            selected={formik.values.start_date}
                            onChange={(date) => formik.setFieldValue('start_date', date)}
                            onBlur={formik.handleBlur}
                            filterDate={(date) => {
                                const disabledDates = getDisabledDates(formik.values.room_id);
                                return !disabledDates.some((disabledDate) => date.toDateString() === disabledDate.toDateString());
                            }}
                            placeholderText="Start Date"
                            dateFormat="yyyy-MM-dd"
                            customInput={
                                <TextField
                                    fullWidth
                                    name="start_date"
                                    label="Start Date"
                                    error={formik.touched.start_date && Boolean(formik.errors.start_date)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <DatePicker
                            selected={formik.values.end_date}
                            onChange={(date) => formik.setFieldValue('end_date', date)}
                            onBlur={formik.handleBlur}
                            filterDate={(date) => {
                                const disabledDates = getDisabledDates(formik.values.room_id);
                                return !disabledDates.some((disabledDate) => date.toDateString() === disabledDate.toDateString());
                            }}
                            placeholderText="End Date"
                            dateFormat="yyyy-MM-dd"
                            customInput={
                                <TextField
                                    fullWidth
                                    name="end_date"
                                    label="End Date"
                                    error={formik.touched.end_date && Boolean(formik.errors.end_date)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Status</InputLabel>
                            <Select
                                name="status"
                                value={formik.values.status}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.status && Boolean(formik.errors.status)}
                            >
                                <MenuItem value="confirmed">Confirmed</MenuItem>
                                <MenuItem value="cancelled">Cancelled</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" color="primary" variant="contained" fullWidth>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default BookingForm;
