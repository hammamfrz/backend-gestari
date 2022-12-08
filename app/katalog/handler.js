const { Katalog } = require('../../models');
const { validateKatalogCreateSchema } = require('../../validator/katalog');

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
    handlerGetKatalogById: async (req, res) => {
        try {
            const { id } = req.params;
            const katalog = await Katalog.findOne({
                where: {
                    id,
                },
            });
            if (!katalog) {
                res.status(400).json({
                    status: 'error',
                    message: 'Katalog tidak ditemukan!',
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    data: katalog,
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerGetKatalogByType: async (req, res) => {
        try {
            const { type } = req.params;
            const katalog = await Katalog.findAll({
                where: {
                    type,
                },
            });
            if (!katalog) {
                res.status(400).json({
                    status: 'error',
                    message: 'katalog tidak ditemukan!',
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    data: katalog,
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerCreateKatalog: async (req, res) => {
        try {
            const { type, name, price, image } = req.body;
            validateKatalogCreateSchema(req.body);
            const katalog = await Katalog.create({
                type,
                name,
                image: req.body.image,
                price: req.body.price,
                satuan: req.body.satuan,
                kode_katalog: req.body.kode_katalog,
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
                    message: 'Katalog tidak ditemukan!',
                });
            }

            await katalog.update({
                type,
                name,
                price,
                image,
                satuan,
                kode_katalog,
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
