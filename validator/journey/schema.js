const joi = require('joi');

const journeyCreateSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    description: joi.string().min(3).max(30).required(),
    image: joi.string().min(3).max(30).required(),
}).unknown();

const journeyUpdateSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    description: joi.string().min(3).max(30).required(),
    image: joi.string().min(3).max(30).required(),
}).unknown();

module.exports = {
    journeyCreateSchema,
    journeyUpdateSchema,
};