const express = require('express');
const { handlerGetUser, handlerCreateUser, handlerUpdateUser, handlerDeleteUser } = require('./handler');
const router = express.Router();

// API 1: GET /user
router.get('/', handlerGetUser);

// API 2: CREATE /user
router.post('/', handlerCreateUser);

// API 3: UPDATE /user/:id
router.put('/:id', handlerUpdateUser);

// API 4: DELETE /user/:id
router.delete('/:id', handlerDeleteUser);


module.exports = router;
