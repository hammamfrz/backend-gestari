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
                id,
                title,
                image: req.body.image,
                date,
                description: req.body.description,
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
            const { title, image, date, description } = req.body;
            const journey = await Journey.findByPk(id);

            if (!journey) {
                res.status(404).json({
                    status: 'error',
                    message: 'journey tidak ditemukan!',
                });
            }

            await journey.update({
                title,
                image,
                date,
                description,
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
            const journey = await journey.findByPk(id);
            if (!journey) {
                res.status(404).json({
                    status: 'error',
                    message: 'journey tidak ditemukan!',
                });
            }

            await journey.destroy();
            
            res.status(200).json({
                status: 'success',
                message: 'journey berhasil dihapus!',
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    },
};
