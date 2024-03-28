const express = require('express');
const router = express.Router();


const { registerUser, loginUser, getCurrentUser, getUsers, deleteUser }  = require('../controller/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/current', protect, getCurrentUser);
router.get('/all', protect, getUsers);
router.delete('/delete/:id', protect, deleteUser);

module.exports = router;
