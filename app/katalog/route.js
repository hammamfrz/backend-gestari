const express = require('express');
const { handlerGetKatalog, handlerCreateKatalog, handlerUpdateKatalog, handlerDeleteKatalog, handlerGetKatalogById, handlerGetKatalogByType } = require('./handler');
const router = express.Router();

// API 1: GET /katalog
router.get('/', handlerGetKatalog);

// API 2: GET /katalog/:id
router.get('/:id', handlerGetKatalogById);

// API 3: CREATE /katalog
router.post('/', handlerCreateKatalog);

// API 4: UPDATE /katalog/:id
router.put('/:id', handlerUpdateKatalog);

// API 5: DELETE /katalog/:id
router.delete('/:id', handlerDeleteKatalog);

// API 6: GET /katalog/type/:type
router.get('/type/:type', handlerGetKatalogByType);

module.exports = router;