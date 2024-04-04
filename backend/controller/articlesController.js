const asyncHandler = require('express-async-handler')
const Article = require('../model/articleModel')
const User = require('../model/userModel')

const getArticle = asyncHandler(async(req,res) => {
    const articles = await Article.find({user: req.user.id});
    res.status(200).json(articles);
})

const getArticles = asyncHandler(async(req,res) => {
    const articles = await Article.find({user: req.user.id});
    res.status(200).json(articles);
})

const setArticle = asyncHandler(async(req, res) => {
    if(!(req.body.title || req.body.introduction || req.body.text || req.body.author)){
        res.status(400);
        throw  new Error('Please enter a Article');
    }
    const article = await Article.create(
        {
            title: req.body.title,
            introduction: req.body.introduction,
            text: req.body.text,
            user: req.user.id

        });  
    res.status(200).json(article);
})

const updateArticle = asyncHandler(async(req, res) => {
    const article = await Article.findById(req.params.id);
    
    if(!article){
        res.status(400);
        throw new Error('Article not found');
    }

    const user = await User.findById(req.user.id);

    if(!user){
        res.status(401);
        throw new Error('No such user found');
    }

    if(article.user.toString() !== user.id){
        res.status(401);
        throw new Error('User is not authorized to update');
    }

    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true})
    res.status(200).json(updatedArticle);
})

const deleteArticle = asyncHandler(async(req, res) => {
    const article = await Article.findById(req.params.id);

    if(!article){
        res.status(400);
        throw new Error('Article not found')
    }

    const user = await User.findById(req.user.id);

    if(!user){
        res.status(401);
        throw new Error('No such user found');
    }

    if(article.user.toString() !== user.id){
        res.status(401);
        throw new Error('User is not authorized to update');
    }

    await Article.findByIdAndDelete(req.params.id);

    res.status(200).json({message: `Deleted Article ${req.params.id}`});
})

module.exports = { getArticle, getArticles, setArticle, updateArticle, deleteArticle }