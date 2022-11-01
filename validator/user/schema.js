const Joi = require('joi');

const userCreateSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    address: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(8).max(14).pattern(/^[0-9]+$/).required(),
    birthdate: Joi.date().required(),
    birthplace: Joi.string().min(3).max(30).required(),
    idNumber: Joi.string().min(15).max(20).required(),
    password: Joi.string().min(8).required(),
}).unknown();

const userUpdateSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    address: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(8).max(14).pattern(/^[0-9]+$/).required().messages({ "string.pattern.base": "Phone Number tidak valid" }),
    idNumber: Joi.string().min(15).max(20).required(),
});


module.exports = {
    userCreateSchema,
    userUpdateSchema,
};