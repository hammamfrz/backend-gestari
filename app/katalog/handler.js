const { Katalog } = require('../models');
const { validateKatalogCreateSchema } = require('../validator/katalog');
const jwt = require('jsonwebtoken');

module.exports = {
    handlerGetKatalog: async (req, res) => {
        try {
            const katalog = await Katalog.findAll();
            res.status(200).json({
                status: 'success',
                data: katalog,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerCreateKatalog: async (req, res) => {
        try {
            const { type, name } = req.body;
            validateKatalogCreateSchema(req.body);
            const katalog = await Katalog.create({
                type,
                name,
            });
            res.status(201).json({
                status: 'success',
                data: katalog,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerUpdateKatalog: async (req, res) => {
        try {
            const { id } = req.params;
            const { type, name } = req.body;
            const katalog = await Katalog.findByPk(id);

            if (!katalog) {
                res.status(400).json({
                    status: 'error',
                    message: 'Katalog not found',
                });
            }

            await katalog.update({
                type,
                name,
            });

            res.status(200).json({
                status: 'success',
                data: katalog,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerDeleteKatalog: async (req, res) => {
        try {
            const { id } = req.params;
            const katalog = await Katalog.findByPk(id);

            if (!katalog) {
                res.status(400).json({
                    status: 'error',
                    message: 'Katalog not found',
                });
            }

            await katalog.destroy();

            res.status(200).json({
                status: 'success',
                data: katalog,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
};
