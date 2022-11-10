const { journeyCreateSchema, journeyUpdateSchema } = require('./schema');

function validateJourneyCreateSchema(payload) {
    const validationReslt = journeyCreateSchema.validate(payload);
    if (validationReslt.error) {
        throw new Error(validationReslt.error.message);
    }
}

function validateJourneyUpdateSchema(payload) {
    const validationReslt = journeyUpdateSchema.validate(payload);
    if (validationReslt.error) {
        throw new Error(validationReslt.error.message);
        }
}

module.exports = {
    validateJourneyCreateSchema,
    validateJourneyUpdateSchema,
};