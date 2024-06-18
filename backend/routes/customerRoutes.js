const express = require('express');
const { getAllCustomers, createCustomer, getCustomerById, updateCustomer, deleteCustomer, login } = require('../controllers/customerController');

const router = express.Router();

router.get('/', getAllCustomers);
router.post('/', createCustomer);
router.get('/:id', getCustomerById);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);
router.post('/login', login);

module.exports = router;
