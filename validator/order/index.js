const { CreateOrderSchema } = require('./schema');

function validateCreateOrderSchema(payload) {
    const validationReslt = CreateOrderSchema.validate(payload);
    if (validationReslt.error) {
        throw new Error(validationReslt.error.message);
    }
    } 


module.exports = {
    validateCreateOrderSchema
};