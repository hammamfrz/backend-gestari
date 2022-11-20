const express = require('express');
const { handlerGetTransaction, handlerCreateTransaction, handlerUpdateTransaction, handlerDeleteTransaction } = require('./handler');
const router = express.Router();

// API 1: GET /transaction
router.get('/', handlerGetTransaction);

// API 2: CREATE /transaction
router.post('/', handlerCreateTransaction);

// API 3: UPDATE /transaction/:id
router.put('/:id', handlerUpdateTransaction);

// API 4: DELETE /transaction/:id
router.delete('/:id', handlerDeleteTransaction);

module.exports = router;