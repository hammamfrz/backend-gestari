const Joi = require('joi');

const userCreateSchema = Joi.object({
    id_member: Joi.string().min(3).max(20).required(),
    NIK: Joi.string().min(8).max(20).required(),
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(8).max(14).pattern(/^[0-9]+$/).required().messages({ 'string.pattern.base': 'Nomor HP tidak valid!' }),
    birthdate: Joi.date().required(),
    birthplace: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/).required().messages({ 'string.pattern.base': 'Password harus mengandung huruf besar, huruf kecil, dan angka!' }),
}).unknown();

const userUpdateSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    address: Joi.string().min(3).max(30).required(),
    phone: Joi.string().min(8).max(14).pattern(/^[0-9]+$/).required().messages({ "string.pattern.base": "Nomor HP tidak valid!" }),
    NIK: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
});


module.exports = {
    userCreateSchema,
    userUpdateSchema,
};