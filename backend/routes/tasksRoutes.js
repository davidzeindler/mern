const express = require('express');
const router = express.Router();

const { getTasks, setTask, updateTask, deleteTask } = require('../controller/tasksController');


router.get('/api/tasks', getTasks);
router.post('/api/tasks', setTask);
router.put('/api/tasks/:id', updateTask);
router.delete('/api/tasks/:id', deleteTask);

module.exports = router;