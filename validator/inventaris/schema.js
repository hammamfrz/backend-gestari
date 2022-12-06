const joi = require('joi');

const inventarisCreateSchema = joi.object({
    id_inventaris: joi.string().min(3).max(30).required(),
    name: joi.string().min(3).max(30).required(),
    brand: joi.string().min(3).max(30).required(),
    year_of_production: joi.string().min(3).max(30).required(),
    status: joi.string().min(3).max(30).required(),
    quantity: joi.number().required(),
    satuan: joi.string().min(3).max(30).required(),
    price: joi.number().required(),
}).unknown();

const inventarisUpdateSchema = joi.object({
    id_inventaris: joi.string().min(3).max(30).required(),
    name: joi.string().min(3).max(30).required(),
    brand: joi.string().min(3).max(30).required(),
    year_of_production: joi.string().min(3).max(30).required(),
    status: joi.string().min(3).max(30).required(),
    quantity: joi.number().required(),
    satuan: joi.string().min(3).max(30).required(),
    price: joi.number().required(),
}).unknown();

module.exports = {
    inventarisCreateSchema,
    inventarisUpdateSchema,
};