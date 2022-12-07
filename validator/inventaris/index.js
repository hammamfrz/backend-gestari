const { inventarisCreateSchema, inventarisUpdateSchema } = require('./schema');

function validateInventarisCreateSchema(payload) {
    const validationReslt = inventarisCreateSchema.validate(payload);
    if (validationReslt.error) {
        throw new Error(validationReslt.error.message);
    }
}

function validateInventarisUpdateSchema(payload) {
    const validationReslt = inventarisUpdateSchema.validate(payload);
    if (validationReslt.error) {
        throw new Error(validationReslt.error.message);
    }
}

module.exports = {
    validateInventarisCreateSchema,
    validateInventarisUpdateSchema,
};