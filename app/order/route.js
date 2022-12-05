const express = require('express');
const { handlerGetOrder, handlerGetOrderById, handlerCreateOrder}= require ('./handler');
const router = express.Router();

//API 1: GET /order
router.get('/', handlerGetOrder);

//API 2: GET /order/id
router.get('/:id', handlerGetOrderById);

//API 3: POST /order
router.post('/', handlerCreateOrder);


module.exports = router;