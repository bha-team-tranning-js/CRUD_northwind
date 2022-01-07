const express = require('express');

const {
    getAllOrders,
    createOrder,
    getOrder,
    updateOrder,
    deleteOrder,
} = require('../controllers/Order.controller');

const router = express.Router();

router.get('/', getAllOrders);
router.post('/', createOrder);
router.get('/:id', getOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
