const transaction = require('../models').transaction;
const { validateTransactionCreateSchema, validateTransactionUpdateSchema } = require('../validator/transaction');
const { User } = require('../models');

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
    handlerCreateTransaction: async (req, res) => {
        try {
            console.log(req.body);
            const { name, address, phone, id, password } = req.body;
            validateTransactionCreateSchema(req.body);
            const hashPassword = await bcrypt.hash(password, 10);
            const transaction = await transaction.create({
                name,
                address,
                phone,
                id,
                password: hashPassword,
                birthdate: req.body.birthdate,
                birthplace: req.body.birthplace,
                id_number: req.body.id_number,
                id_member: req.body.id_member,
            });
            res.status(201).json({
                status: 'success',
                data: transaction,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerUpdateTransaction: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, address, phone } = req.body;
            const transaction = await transaction.findByPk(id);

            if (!transaction) {
                res.status(400).json({
                    status: 'error',
                    message: 'Transaction not found',
                });
            }

            await transaction.update({
                name,
                address,
                phone,
            });

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