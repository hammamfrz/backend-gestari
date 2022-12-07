const { CreateOrderDetailSchema } = require('./schema');

function validateCreateOrderDetailSchema(payload) {
    const validationReslt = CreateOrderDetailSchema.validate(payload);
    if (validationReslt.error) {
        throw new Error(validationReslt.error.message);
    }
    } 


module.exports = {
    validateCreateOrderDetailSchema
};