const Joi = require('joi');

const transactionCreateSchema = Joi.object({
    id_member: Joi.number().min(0).required(),
    id_katalog: Joi.string().min(0).required(),
    quantity: Joi.number().integer().min(0).required(),
    DateRequired: Joi.date(),
}).unknown();

const transactionUpdateSchema = Joi.object({
    id_member: Joi.number().min(3).max(20).required(),
    id_katalog: Joi.string().min(3).max(20).required(),
    kertas_qty: Joi.number().integer().min(0).required(),
    plastik_qty: Joi.number().integer().min(0).required(),
    kaca_qty: Joi.number().integer().min(0).required(),
    logam_qty: Joi.number().integer().min(0).required(),
    khusus_qty: Joi.number().integer().min(0).required(),
    total_qty: Joi.number().integer().min(0).required(),
    total_price: Joi.number().integer().min(0).required(),
    status: Joi.string().min(3).max(20).required(),
}).unknown();

module.exports = {
    transactionCreateSchema,
    transactionUpdateSchema,
};