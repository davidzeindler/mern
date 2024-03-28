const asyncHandler = require('express-async-handler')
const Task = require('../model/taskModel');

const getTasks = asyncHandler(async(req,res) => {
    const tasks = await Task.find({user: req.user.id});
    res.status(200).json(tasks);
})

const setTask = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400);
        throw  new Error('Please enter a Task');
    }   
    const task = await Task.create({ text: req.body.text, user: req.user.id});
    res.status(200).json(task);
})

const updateTask = asyncHandler (async(req, res) => {
    const task = await Task.findById(req.params.id);   
    if(!task){
        res.status(400);
        throw new Error('Task not found');
    }
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true})
    res.status(200).json(updatedTask);
})

const deleteTask = asyncHandler (async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({message: `Deleted Task ${req.params.id}`});
})

module.exports = { getTasks, setTask, updateTask, deleteTask }