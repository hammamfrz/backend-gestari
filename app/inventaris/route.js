const express = require('express');
const { handlerGetInventaris, handlerCreateInventaris, handlerUpdateInventaris, handlerDeleteInventaris, handlerGetInventarisById } = require ('./handler');
const router = express.Router();

// API 1: GET /inventaris
router.get('/', handlerGetInventaris);

// API 2: GET /inventaris/:id
router.get('/:id', handlerGetInventarisById);

// API 3: CREATE /inventaris
router.post('/', handlerCreateInventaris);

// API 4: UPDATE /inventaris/:id
router.put('/:id', handlerUpdateInventaris);

// API 5: DELETE /inventaris/:id
router.delete('/:id', handlerDeleteInventaris);

module.exports = router;