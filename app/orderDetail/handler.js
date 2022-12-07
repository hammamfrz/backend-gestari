const { OrderDetail } = require('../../models');
const { katalogCreateSchema } = require('../../validator/katalog/schema');
const { validateCreateOrderSchema } = require('../../validator/orderDetail');


module.exports = {
    handlerGetOrderDetail: async (req, res) => {
        try {
            const orderDetail = await OrderDetail.findAll();
            res.status(200).json({
                status: 'success',
                data: orderDetail,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }

    },
    handlerGetOrderDetailById: async (req, res) => {
        try {
            const { id } = req.params;
            const orderDetail = await OrderDetail.findByPk(id);
            if (!order) {
                res.status(400).json({
                    status: 'error',
                    message: 'Order not found',
                });
            }
            res.status(200).json({
                status: 'success',
                data: orderDetail,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },

    handlerCreateOrderDetail: async (req, res) => {
        try {
            const { id, id_order, id_katalog, quantity} = req.body;
            validateCreateOrderSchema(req.body);
            const orderDetail = await order.create({
                id,
                id_order,
                id_user,
                id_katalog,
                quantity,
            });
            res.status(201).json({
                status: 'success',
                data: orderDetail,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
};