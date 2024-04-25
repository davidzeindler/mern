const express = require('express');
const router = express.Router();

const { createRole, createPermission , addPermissionToRole, getUserRole, addRoleToUser} = require('../controller/userAccessController');


const { protect } = require('../middleware/authMiddleware');

router.post('/roles/create', protect, createRole);
router.post('/permissions/create', protect, createPermission);
router.post('/roles/addPermission/', protect, addPermissionToRole);
router.post('/roles/addRoleToUser/', protect, addRoleToUser);

router.post('/roles', protect, getUserRole);


module.exports = router;