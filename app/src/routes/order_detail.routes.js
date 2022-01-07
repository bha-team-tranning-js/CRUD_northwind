const express = require('express');

const {
    getAllOrderDetails,
    createOrderDetail,
    getOrderDetail,
    deleteOrderDetail,
} = require('../controllers/order_details.controller');

const router = express.Router();

router.route('/').get(getAllOrderDetails).post(createOrderDetail);
router.route('/:id').get(getOrderDetail).delete(deleteOrderDetail);

module.exports = router;
