const { User } = require('../../models');
const bcrypt = require('bcrypt');

module.exports = {
    handlerGetUser: async (req, res) => {
        try {
            const users = await User.findAll();
            res.status(200).json({
                status: 'success',
                data: users,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerCreateUser: async (req, res) => {
        try {
            const { name, address, phone, id, password } = req.body;
            const hashPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                name,
                address,
                phone,
                id,
                password: hashPassword,
            });
            res.status(201).json({
                status: 'success',
                data: user,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },     
    handlerUpdateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, address, phone } = req.body;
            const user = await User.findByPk(id);
            if (!user) {
                res.status(400).json({
                    status: 'error',
                    message: 'User already exists',
                });
            } else {
                await user.update({
                    name,
                    address,
                    phone,
                });
                res.status(200).json({
                    status: 'success',
                    data: user,
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerDeleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.destroy({
                where: {
                    id,
                },
            });
            res.status(200).json({
                status: 'successfully deleted',
                data: user,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
};