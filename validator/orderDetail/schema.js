const Joi = require('joi');

const CreateOrderDetailSchema = Joi.object({
    id_transaction: Joi.number().min(0).max(20).required(),
    id_member: Joi.number().min(3).max(20).required(),
    id_katalog: Joi.number().min().max().required(),
    quantity: Joi.number().min().max().required(),
    total_price: Joi.number().min().max().required(),
}).unknown();

module.exports = {
    CreateOrderDetailSchema
};