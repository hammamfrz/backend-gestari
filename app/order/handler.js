const { Order } = require('../../models');
const { validateCreateOrderSchema } = require('../../validator/order');


module.exports = {
    handlerGetOrder: async (req, res) => {
        try {
            const order = await Order.findAll();
            res.status(200).json({
                status: 'success',
                data: order,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }

    },
    handlerGetOrderById: async (req, res) => {
        try {
            const { id } = req.params;
            const order = await order.findByPk(id);
            if (!order) {
                res.status(400).json({
                    status: 'error',
                    message: 'Order not found',
                });
            }
            res.status(200).json({
                status: 'success',
                data: order,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerCreateOrder: async (req, res) => {
        try {
            const { id, id_user, status, dateOrdered } = req.body;
            validateCreateOrderSchema(req.body);
            const order = await order.create({
                id,
                id_user,
                status,
                dateOrdered,
            });
            res.status(201).json({
                status: 'success',
                data: order,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
};