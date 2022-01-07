const Order = require('../model/Order');

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json({
            success: true,
            message: 'get all Orders suscess',
            data: {
                result: orders.length,
                orders,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all Orders fail',
            error: { err },
        });
    }
};

const createOrder = async (req, res) => {
    const {
        order_date,
        ship_address,
        shipping_fee,
        total_price,
        note,
        shiped_date,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id,
    } = req.body;
    const order = new Order(
        order_date,
        ship_address,
        shipping_fee,
        total_price,
        note,
        shiped_date,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id
    );
    //chưa check dữ liệu đầu vào
    try {
        await order.save();
        return res.status(201).json({
            success: true,
            message: 'created!',
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'create fail!',
            error: { err },
        });
    }
};
const getOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { order },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const updateOrder = async (req, res) => {
    const { id } = req.params;
    const {
        order_date,
        ship_address,
        shipping_fee,
        total_price,
        note,
        shiped_date,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id,
    } = req.body;
    const order = new Order(
        order_date,
        ship_address,
        shipping_fee,
        total_price,
        note,
        shiped_date,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id
    );
    try {
        await order.updateById(id);
        res.status(201).json({
            success: true,
            message: 'Updated Order',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Update fail',
            error: { err },
        });
    }
};
const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        await Order.deleteById(id);
        res.status(200).json({
            success: true,
            message: 'deleted !',
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'delete fail',
            error: { err },
        });
    }
};
module.exports = {
    getAllOrders,
    createOrder,
    getOrder,
    updateOrder,
    deleteOrder,
};
