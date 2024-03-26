const asyncHandler = require('express-async-handler')

const getTasks = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Get All Tasks'});
})

const setTask = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400);
        throw  new Error('Please enter a Task');
    }
    res.status(200).json({message: 'Created Task'});
})

const updateTask = asyncHandler (async(req, res) => {
    res.status(200).json({message: `Updated Task ${req.params.id}`});
})

const deleteTask = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Deleted Task ${req.params.id}`});
})

module.exports = { getTasks, setTask, updateTask, deleteTask }