const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getCurrentUser, getUsers, deleteUser }  = require('../controller/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/current', getCurrentUser);
router.get('/all', getUsers);
router.delete('/delete/:id', deleteUser);

module.exports = router;
