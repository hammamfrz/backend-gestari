const joi = require('joi');

const journeyCreateSchema = joi.object({
    title: joi.string().min(3).max(30).required(),
    image: joi.string().min(3).max(30).required(),
    date: joi.date().required(),
    description: joi.string().min(3).max(30).required(),
}).unknown();

const journeyUpdateSchema = joi.object({
    title: joi.string().min(3).max(30).required(),
    image: joi.string().min(3).max(30).required(),
    date: joi.date().required(),
    description: joi.string().min(3).max(30).required(),
}).unknown();

module.exports = {
    journeyCreateSchema,
    journeyUpdateSchema,
};