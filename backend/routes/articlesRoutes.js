const express = require('express');
const { setArticle, getArticle, updateArticle, deleteArticle } = require('../controller/articlesController');
const router = express.Router();


router.get('/', getArticle); // get
router.post('/', setArticle); // create
router.put('/:id', updateArticle); // update
router.delete('/:id', deleteArticle); // delete


module.exports = router;