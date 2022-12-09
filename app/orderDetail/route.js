const express = require('express');
const { handlerGetOrderDetail, handlerCreateOrderDetail, handlerGetOrderDetailById, handlerDeleteOrderDetail } = require('./handler');
const router = express.Router();

// API 1: GET /orderDetail
router.get('/', handlerGetOrderDetail);

// API 2: CREATE /orderDetail
router.post('/', handlerCreateOrderDetail);

// API 3: GET /orderDetail/:id
router.get('/:id', handlerGetOrderDetailById);

// API 4: DELETE /orderDetail/:id
router.delete('/:id', handlerDeleteOrderDetail);

module.exports = router;