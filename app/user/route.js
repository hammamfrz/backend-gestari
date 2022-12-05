const express = require('express');
const { handlerGetUser, handlerCreateUser, handlerUpdateUser, handlerDeleteUser, handlerLoginUser, handlerLogoutUser, handlerGetUserById } = require('./handler');
const router = express.Router();

// API 1: GET /user
router.get('/', handlerGetUser);

// API 2: CREATE/REGISTER /user/register
router.post('/register', handlerCreateUser);

// API 3: UPDATE /user/:id
router.put('/:id', handlerUpdateUser);

// API 4: DELETE /user/:id
router.delete('/:id', handlerDeleteUser);

// API 5: LOGIN /user/login
router.post('/login', handlerLoginUser);

// API 6: LOGOUT /user/logout
router.post('/logout', handlerLogoutUser);

// API : GET /user/:id
router.get('/:id', handlerGetUserById);



module.exports = router;
