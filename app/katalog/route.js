const express = require('express');
const { handlerGetKatalog, handlerCreateKatalog, handlerUpdateKatalog, handlerDeleteKatalog } = require('./handler');
const router = express.Router();

// API 1: GET /katalog
router.get('/', handlerGetKatalog);

// API 2: CREATE /katalog
router.post('/', handlerCreateKatalog);

// API 3: UPDATE /katalog/:id
router.put('/:id', handlerUpdateKatalog);

// API 4: DELETE /katalog/:id
router.delete('/:id', handlerDeleteKatalog);

module.exports = router;