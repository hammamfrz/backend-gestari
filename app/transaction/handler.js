const { transaction: Transaction, orderDetail : OrderDetail } = require('../../models');
const { validateTransactionCreateSchema } = require('../../validator/transaction');
const { user: User } = require('../../models');

module.exports = {
    handlerGetTransaction: async (req, res) => {
        try {
            const transaction = await Transaction.findAll({include: [{model: OrderDetail, attributes: ['id', 'id_transaction', 'id_katalog', 'quantity', 'total_price']}]});
            res.status(200).json({
                status: 'success',
                data: transaction,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerGetTransactionById: async (req, res) => {
        try {
            const { id } = req.params;
            const transaction = await Transaction.findByPk(id);
            if (!transaction) {
                res.status(400).json({
                    status: 'error',
                    message: 'Transaction not found',
                });
            }
            res.status(200).json({
                status: 'success',
                data: transaction,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerCreateTransaction: async (req, res) => {
        try {
            const { id, date, id_user } = req.body;
            validateTransactionCreateSchema(req.body);
            const transaction = await Transaction.create({
                id,
                date,
                id_user,
                include: [{
                    User
                }]
            });
            res.status(201).json({
                status: 'success',
                data: transaction,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
            console.log(error);
        }
    },
    handlerDeleteTransaction: async (req, res) => {
        try {
            const { id } = req.params;
            const transaction = await Transaction.findByPk(id);

            if (!transaction) {
                res.status(400).json({
                    status: 'error',
                    message: 'Transaction not found',
                });
            }

            await Transaction.destroy();

            res.status(200).json({
                status: 'success',
                data: transaction,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
};