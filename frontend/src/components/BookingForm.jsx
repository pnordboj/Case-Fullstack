import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';

const BookingForm = ({ rooms, customers }) => {
    const formik = useFormik({
        initialValues: {
            room_id: '',
            customer_id: '',
            start_date: '',
            end_date: '',
            status: ''
        },
        validationSchema: Yup.object({
            room_id: Yup.number().required('Required'),
            customer_id: Yup.number().required('Required'),
            start_date: Yup.date().required('Required'),
            end_date: Yup.date().required('Required'),
            status: Yup.string().required('Required')
        }),
        onSubmit: values => {
            // submit form
            console.log(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormControl fullWidth>
                <InputLabel>Rom</InputLabel>
                <Select
                    name="room_id"
                    value={formik.values.room_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.room_id && Boolean(formik.errors.room_id)}
                >
                    {rooms.map(room => (
                        <MenuItem key={room.id} value={room.id}>
                            {room.room_number}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Customer</InputLabel>
                <Select
                    name="customer_id"
                    value={formik.values.customer_id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.customer_id && Boolean(formik.errors.customer_id)}
                >
                    {customers.map(customer => (
                        <MenuItem key={customer.id} value={customer.id}>
                            {customer.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                fullWidth
                name="start_date"
                label="Start Date"
                type="date"
                value={formik.values.start_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.start_date && Boolean(formik.errors.start_date)}
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                fullWidth
                name="end_date"
                label="End Date"
                type="date"
                value={formik.values.end_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.end_date && Boolean(formik.errors.end_date)}
                InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.status && Boolean(formik.errors.status)}
                >
                    <MenuItem value="confirmed">Bekreft</MenuItem>
                    <MenuItem value="cancelled">Kansellert</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit" color="primary" variant="contained">Submit</Button>
        </form>
    );
};

export default BookingForm;
