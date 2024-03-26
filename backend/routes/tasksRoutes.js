const express = require('express');
const router = express.Router();

const { getTasks } = require('../controller/tasksController');


router.get('/api/tasks', getTasks);

module.exports = router;