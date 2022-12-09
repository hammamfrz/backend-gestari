const Joi = require('joi');

const transactionCreateSchema = Joi.object({
    id_user: Joi.number().required(),
    date: Joi.date(),
}).unknown();

const transactionUpdateSchema = Joi.object({
    id_muser: Joi.number().required(),
    date: Joi.date(),
}).unknown();

module.exports = {
    transactionCreateSchema,
    transactionUpdateSchema,
};