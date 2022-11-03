const { katalogCreateSchema, katalogUpdateSchema } = require('./schema');

function validateKatalogCreateSchema(payload) {
  const validationReslt = katalogCreateSchema.validate(payload);
  if (validationReslt.error) {
    throw new Error(validationReslt.error.message);
  }
}

function validateKatalogUpdateSchema(payload) {
    const validationReslt = katalogUpdateSchema.validate(payload);
    if (validationReslt.error) {
        throw new Error(validationReslt.error.message);
        }
}

module.exports = {
    validateKatalogCreateSchema,
    validateKatalogUpdateSchema,
};