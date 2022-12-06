const { Inventaris } = require('../../models');
const { validateInventarisCreateSchema, validateInventarisUpdateSchema } = require('../../validator/inventaris');


module.exports = {
    handlerGetInventaris: async (req, res) => {
        try {
            const inventaris = await Inventaris.findAll();
            res.status(200).json({
                status: 'success',
                data: inventaris,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerGetInventarisById: async (req, res) => {
        try {
            const { id } = req.params;
            const inventaris = await Inventaris.findOne({
                where: {
                    id,
                },
            });
            if (!inventaris) {
                res.status(400).json({
                    status: 'error',
                    message: 'Inventaris tidak ditemukan!',
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    data: inventaris,
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerCreateInventaris: async (req, res) => {
        try {
            const { id_inventaris, name, brand, year_of_production, status, quantity, satuan, price } = req.body;
            validateInventarisCreateSchema(req.body);
            const inventaris = await Inventaris.create({
                id_inventaris: req.body.id_inventaris,
                name: req.body.name,
                brand: req.body.brand,
                year_of_production: req.body.year_of_production,
                status: req.body.status,
                quantity: req.body.quantity,
                satuan: req.body.satuan,
                price: req.body.price,
            });
            res.status(201).json({
                status: 'success',
                data: inventaris,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerUpdateInventaris: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, status, quantity, satuan, price, brand, year_of_production} = req.body;
            validateInventarisUpdateSchema(req.body);
            const inventaris = await Inventaris.findByPk(id);

            if (!inventaris) {
                res.status(400).json({
                    status: 'error',
                    message: 'Inventaris tidak ditemukan!',
                });
            } else {
                await inventaris.update({
                    name,
                    brand,
                    status,
                    year_of_production,
                    status,
                    quantity,
                    satuan,
                    price,
                });
                res.status(200).json({
                    status: 'success',
                    data: inventaris,
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerDeleteInventaris: async (req, res) => {
        try {
            const { id } = req.params;
            const inventaris = await Inventaris.findByPk(id);

            if (!inventaris) {
                res.status(400).json({
                    status: 'error',
                    message: 'Inventaris tidak ditemukan!',
                });
            } else {
                await inventaris.destroy();
                res.status(200).json({
                    status: 'success',
                    message: 'Inventaris berhasil dihapus!',
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
};