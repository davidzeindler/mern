const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const bcrypt = require('bcryptjs')

var jwt = require('jsonwebtoken');

// JWT
const generateJWTToken = id => jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '5d'})


const registerUser = asyncHandler(async (req, res)=> {

    const { name, email, password} = req.body;
    console.log(req.body);
    if(!name || !email || !password)
    {
        res.status(400);
        throw new Error('All fields are mandatory');
    }
    const userExist = await User.findOne({ email});
    if(userExist){
        res.status(400);
        throw new Error('User Exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name: name, email: email, password: hashedPassword });
 
    if(user)
    {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateJWTToken(user.id)
         });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }   
});

const loginUser = asyncHandler(async (req, res)=> {
    const { email, password } = req.body;

    console.log(req.body);

    const user = await User.findOne({email})
    
    console.log(email)
    console.log(password) 

    console.log(user);
    if(user && (await bcrypt.compare(password, user.password))){
        console.log(user);
        res.json({
                    _id: user.id, 
                    name: user.name, 
                    email: user.email, 
                    token: generateJWTToken(user.id)
                });
    }
    else {
        res.status(400);
        throw new Error('Invalid data')
    }
});


const getCurrentUser = asyncHandler(async (req, res) => {

    const {_id, name, email } = await User.findById(req.user.id)
    res.json({ id: _id, name , email });
});

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();   
    res.json({users})
});

const deleteUser = asyncHandler(async (req, res)=> {
    console.log(req.params.id);
    const user = await User.findByIdAndDelete(req.params.id);
    if(user) {
        res.status(200).json({ message: 'Deleted succesful'})
    }
    console.log(user.email);
});

module.exports = { registerUser, loginUser, getCurrentUser, getUsers, deleteUser}

