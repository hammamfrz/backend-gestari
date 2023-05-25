const Joi = require('joi');

const CreateOrderDetailSchema = Joi.object({
    id_katalog: Joi.number().required(),
    quantity: Joi.number().required(),
    detail: Joi.string().required(),
    total_price: Joi.number().required(),
}).unknown();

module.exports = {
    CreateOrderDetailSchema
};