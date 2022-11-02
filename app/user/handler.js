const { User } = require('../../models');
const bcrypt = require('bcrypt');
const { validateUserCreateSchema } = require('../../validator/user');
const jwt = require('jsonwebtoken');

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
            console.log(req.body);
            const { name, address, phone, id, password } = req.body;
            validateUserCreateSchema(req.body);
            const hashPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                name,
                address,
                phone,
                id,
                password: hashPassword,
                birthdate: req.body.birthdate,
                birthplace: req.body.birthplace,
                idNumber: req.body.idNumber,
                idMember: req.body.idMember,
                gender: 'L',
                role: 'admin',
            });
            res.status(201).json({
                status: 'success',
                data: user,
            });
        } catch (error) {
            console.log(error);
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
    handlerLoginUser: async (req, res) => {
        try {
            const { phone, password } = req.body;
            const user = await User.findOne({
                where: {
                    phone,
                },
            });
            const accessToken = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    role: user.role,
                    phone: user.phone,
                },
                'gestari-secret-key',
                { expiresIn: '1h' }
            );
            if (!user) {
                res.status(400).json({
                    status: 'error',
                    message: 'Nomor HP atau Password tidak valid!',
                });
            } else {
                const isValidPassword = await bcrypt.compare(password, user.password);
                if (!isValidPassword) {
                    res.status(400).json({
                        status: 'error',
                        message: 'Nomor HP atau Password tidak valid!',
                    });
                } else {
                    res.status(200).json({
                        status: 'success',
                        data: { user, accessToken },
                    });
                }
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerLogoutUser: async (req, res) => {
        try {
            res.status(200).json({
                status: 'success',
                message: 'Logout success',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
};