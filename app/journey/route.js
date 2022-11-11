const express = require('express');
const { handlerGetJourney, handlerCreateJourney, handlerUpdateJourney, handlerDeleteJourney, handlerGetJourneyById } = require('./handler');
const router = express.Router();

// API 1: GET /journey
router.get('/', handlerGetJourney);

// API 2: GET /journey/:id
router.get('/:id', handlerGetJourneyById);

// API 3: CREATE /journey
router.post('/', handlerCreateJourney);

// API 4: UPDATE /journey/:id
router.put('/:id', handlerUpdateJourney);

// API 5: DELETE /journey/:id
router.delete('/:id', handlerDeleteJourney);

module.exports = router;