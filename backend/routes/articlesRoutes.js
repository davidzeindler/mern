const express = require('express');
const { setArticle, getArticle, updateArticle, deleteArticle } = require('../controller/articlesController');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getArticle); // get
router.post('/', protect, setArticle); // create
router.put('/:id', protect, updateArticle); // update
router.delete('/:id', protect, deleteArticle); // delete

module.exports = router;