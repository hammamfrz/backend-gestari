const { transaction } = require('../../models');
const { validateTransactionCreateSchema, validateTransactionUpdateSchema } = require('../validator/transaction');

module.exports = {
    handlerGetTransaction: async (req, res) => {
        try {
            const transaction = await transaction.findAll();
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
            const transaction = await transaction.findByPk(id);
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
    handlerDeleteTransaction: async (req, res) => {
        try {
            const { id } = req.params;
            const transaction = await transaction.findByPk(id);

            if (!transaction) {
                res.status(400).json({
                    status: 'error',
                    message: 'Transaction not found',
                });
            }

            await transaction.destroy();

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