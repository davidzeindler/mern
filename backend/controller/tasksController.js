const getTasks = (req,res) => {
    res.status(200).json({message: 'Get All Tasks'});
}

const setTask =(req, res) => {
    if(!req.body.text){
        res.status(400);
        throw  new Error('Please enter a Task');
    }
    res.status(200).json({message: 'Created Task'});
}

const updateTask =(req, res) => {
    res.status(200).json({message: `Updated Task ${req.params.id}`});
}

const deleteTask = (req, res) => {
    res.status(200).json({message: `Deleted Task ${req.params.id}`});
}

module.exports = { getTasks, setTask, updateTask, deleteTask }