const express = require('express');
const router = express.Router();

const { createOrganisation } = require('../controller/organisationController');


const { protect } = require('../middleware/authMiddleware');

router.post('/organisations/create', protect, createOrganisation);


module.exports = router;