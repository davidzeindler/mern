const asyncHandler = require('express-async-handler')
const Article = require('../model/articleModel')

const getArticle = asyncHandler(async(req,res) => {
    const articles = await Article.find({user: req.user.id});
    res.status(200).json(articles);
})

const setArticle = asyncHandler(async(req, res) => {
    if(!(req.body.title || req.body.introduction || req.body.text || req.body.author)){
        res.status(400);
        throw  new Error('Please enter a Task');
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
    console.log(req.body);
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true})
    res.status(200).json(updatedArticle);
})

const deleteArticle = asyncHandler(async(req, res) => {
    const article = await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({message: `Deleted Article ${req.params.id}`});
})

module.exports = { getArticle, setArticle, updateArticle, deleteArticle }