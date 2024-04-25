const asyncHandler = require('express-async-handler')
const Role = require('../model/roleModel');
const Permission  = require('../model/permissionModel');
const User  = require('../model/userModel');

const createPermission = asyncHandler(async(req, res) => {

    if(!(req.user.id || req.body.userId ||  req.body.permission || req.body.description )){
        res.status(400);
        throw new Error('Please enter a permission');
    }
    const permission = await Permission.create(
        {
            name: req.body.permission,
            description: req.body.description,
        });  
    res.status(200).json(permission);
});

const createRole = asyncHandler(async(req, res) => {

    if(!(req.user.id || req.body.userId ||  req.body.role || req.body.description )){
        res.status(400);
        throw new Error('Please enter a role');
    }
    const role = await Role.create(
        {
            name: req.body.role,
            description: req.body.description,
        });  
    res.status(200).json(role);
});

const addPermissionToRole = asyncHandler(async(req, res) => {

    if(!(req.user.id || req.body.roleId || req.body.permissionId )){
        res.status(400);
        throw new Error('Please enter a roleId and a permissionId');
    }

    const role = await Role.findById(req.body.roleId);
    if(role) {
        const permission = await Permission.findById(req.body.permissionId);
        const roleUpdated = await Role.findByIdAndUpdate(req.body.roleId, {$push: {"permission": permission}})
        res.status(200).json(roleUpdated);
    }
});

const addRoleToUser = asyncHandler(async(req, res) => {

    if(!(req.user.id || req.body.roleId || req.body.userId )){
        res.status(400);
        throw new Error('Please enter a roleId and a roleId');
    }
    const role = await Role.findById(req.body.roleId);
    if(role) {
        const userUpdated = await User.findByIdAndUpdate(req.body.userId, {$push: {"roles": role}})
        res.status(200).json(userUpdated);
    }
});



const getUserRole = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user.id).populate({
            path: 'roles',
            model: 'Role',
            populate: [{
                path: 'permissions',
                model: 'Permission'
            }]
        }).exec();


        res.status(200).json(user);
});



module.exports = { createRole, createPermission, addPermissionToRole, getUserRole, addRoleToUser }