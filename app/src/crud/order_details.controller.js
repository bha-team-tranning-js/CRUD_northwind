const OrderDetail = require('../model/OrderDetail');

const getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll();
        res.status(200).json({
            success: true,
            message: 'get all OrderDetails suscess',
            data: {
                result: orderDetails.length,
                orderDetails,
            },
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'get all OrderDetails fail',
            error: { err },
        });
    }
};

const createOrderDetail = async (req, res) => {
    const { product_id, order_id, quantity, size_number, unit_price } =
        req.body;
    const orderDetail = new OrderDetail(
        product_id,
        order_id,
        quantity,
        size_number,
        unit_price
    );
    //chưa check dữ liệu đầu vào
    try {
        await orderDetail.save();
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
const getOrderDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const orderDetail = await OrderDetail.findOne(id);
        return res.status(201).json({
            success: true,
            message: 'find success!',
            data: { orderDetail },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'find fail!',
            error: { err },
        });
    }
};
const deleteOrderDetail = async (req, res) => {
    const { id } = req.params;
    try {
        await OrderDetail.deleteById(id);
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
    getAllOrderDetails,
    createOrderDetail,
    getOrderDetail,
    deleteOrderDetail,
};
