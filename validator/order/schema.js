const Joi = require('joi');

const CreateOrderSchema = Joi.object({
    id_user: Joi.number().min(3).max(20).required(),
    status: Joi.string().min(3).max(20).required(),
    dataOrdered: Joi.date().required(),
    DateRequired: Joi.date().required(),
}).unknown();

module.exports = {
    CreateOrderSchema,
};