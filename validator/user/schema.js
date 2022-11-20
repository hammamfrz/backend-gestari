const Joi = require('joi');

const userCreateSchema = Joi.object({
    id_member: Joi.string().min(3).max(20).required(),
    NIK: Joi.string().min(8).max(20).required(),
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(8).max(14).pattern(/^[0-9]+$/).required().messages({ 'string.pattern.base': 'Phone number must be a number' }),
    birthdate: Joi.date().required(),
    birthplace: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).required(),
}).unknown();

const userUpdateSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    address: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(8).max(14).pattern(/^[0-9]+$/).required().messages({ "string.pattern.base": "Phone Number tidak valid" }),
    NIK: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
});


module.exports = {
    userCreateSchema,
    userUpdateSchema,
};