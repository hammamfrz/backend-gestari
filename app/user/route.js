const express = require('express');
const { handlerGetUser, handlerCreateUser, handlerUpdateUser, handlerDeleteUser, handlerLoginUser, handlerLogoutUser } = require('./handler');
const router = express.Router();

// API 1: GET /user
router.get('/', handlerGetUser);

// API 2: CREATE/REGISTER /user
router.post('/', handlerCreateUser);

// API 3: UPDATE /user/:id
router.put('/:id', handlerUpdateUser);

// API 4: DELETE /user/:id
router.delete('/:id', handlerDeleteUser);

// API 5: LOGIN /user/login
router.post('/login', handlerLoginUser);

// API 6: LOGOUT /user/logout
router.post('/logout', handlerLogoutUser);



module.exports = router;
