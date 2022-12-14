const joi = require('joi');

const katalogCreateSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    price: joi.number().required(),
    type: joi.string().min(3).max(30).required(),
    image: joi.string().min(3).max(100).required(),
}).unknown();

const katalogUpdateSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    price: joi.number().required(),
    type: joi.string().min(3).max(30).required(),
    image: joi.string().min(3).max(100).required(),
}).unknown();

module.exports = {
    katalogCreateSchema,
    katalogUpdateSchema,
};