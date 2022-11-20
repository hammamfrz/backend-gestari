const { transactionCreateSchema, transactionUpdateSchema } = require('./schema');

function validateTransactionCreateSchema(payload) {
    const validationReslt = transactionCreateSchema.validate(payload);
    if (validationReslt.error) {
        throw new Error(validationReslt.error.message);
    }
    } 

function validateTransactionUpdateSchema(payload) {
    const validationReslt = transactionUpdateSchema.validate(payload);
    if (validationReslt.error) {
        throw new Error(validationReslt.error.message);
        }
    }

module.exports = {
    validateTransactionCreateSchema,
    validateTransactionUpdateSchema,
};