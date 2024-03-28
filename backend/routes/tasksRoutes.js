const express = require('express');
const router = express.Router();

const { getTasks, setTask, updateTask, deleteTask } = require('../controller/tasksController');

const { protect } = require('../middleware/authMiddleware');

router.get('/api/tasks', protect, getTasks);
router.post('/api/tasks', protect, setTask);
router.put('/api/tasks/:id', protect, updateTask);
router.delete('/api/tasks/:id', protect, deleteTask);

module.exports = router;