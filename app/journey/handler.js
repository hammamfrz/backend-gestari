const { Journey } = require('../../models');
const { validateJourneyCreateSchema } = require('../../validator/journey');
const jwt = require('jsonwebtoken');

module.exports = {
    handlerGetJourney: async (req, res) => {
        try {
            const journey = await Journey.findAll();
            res.status(200).json({
                status: 'success',
                data: journey,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerGetJourneyById: async (req, res) => {
        try {
            const { id } = req.params;
            const journey = await Journey.findOne({
                where: {
                    id,
                },
            });
            res.status(200).json({
                status: 'journey berhasil ditemukan!',
                data: journey,
            });
        } catch (error) {
            res.status(500).json({
                status: 'journey tidak ditemukan!',
                message: error.message,
            });
        }
    },
    handlerCreateJourney: async (req, res) => {
        try {
            const { type, name, price, image } = req.body;
            validateJourneyCreateSchema(req.body);
            const journey = await Journey.create({
                type,
                name,
                image: req.body.image,
                price: req.body.price,
                satuan: req.body.satuan,
                kode_journey: req.body.kode_journey,
            });
            res.status(201).json({
                status: 'success',
                data: journey,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerUpdateJourney: async (req, res) => {
        try {
            const { id } = req.params;
            const { type, name, price, image } = req.body;
            const journey = await Journey.update({
                type,
                name,
                image: req.body.image,
                price: req.body.price,
                satuan: req.body.satuan,
                kode_journey: req.body.kode_journey,
            }, {
                where: {
                    id,
                },
            });
            res.status(200).json({
                status: 'success',
                data: journey,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
    handlerDeleteJourney: async (req, res) => {
        try {
            const { id } = req.params;
            const journey = await Journey.destroy({
                where: {
                    id,
                },
            });
            res.status(200).json({
                status: 'success',
                data: journey,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
};
