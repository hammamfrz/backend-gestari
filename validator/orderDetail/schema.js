const Joi = require('joi');

const CreateOrderDetailSchema = Joi.object({
    id_katalog: Joi.number().min().max().required(),
    quantity: Joi.number().min().max().required(),
    detail: Joi.string().min().max().required(),
    total_price: Joi.number().min().max().required(),
}).unknown();

module.exports = {
    CreateOrderDetailSchema
};