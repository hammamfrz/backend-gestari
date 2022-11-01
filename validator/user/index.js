const { userCreateSchema, userUpdateSchema } = require("./schema");

function validateUserCreateSchema(payload) {
  const validationReslt = userCreateSchema.validate(payload);
  if (validationReslt.error) {
    throw new Error(validationReslt.error.message);
  }
}

function validateUserUpdateSchema(payload) {
    const validationReslt = userUpdateSchema.validate(payload);
    if (validationReslt.error) {
        throw new Error(validationReslt.error.message);
        }
}

module.exports = {
    validateUserCreateSchema,
    validateUserUpdateSchema,
};

