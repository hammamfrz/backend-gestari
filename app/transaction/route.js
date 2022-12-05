const express = require('express');
const { handlerGetTransaction, handlerCreateTransaction, handlerGetTransactionById, handlerDeleteTransaction } = require('./handler');
const router = express.Router();

// API 1: GET /transaction
router.get('/', handlerGetTransaction);

// API 2: CREATE /transaction
router.post('/', handlerCreateTransaction);

// API 3: GET /transaction/:id
router.get('/:id', handlerGetTransactionById);

// API 4: DELETE /transaction/:id
router.delete('/:id', handlerDeleteTransaction);


module.exports = router;