const express = require('express');
const router = express.Router();

const { createLibrary, addLoggedUserToLibrary, addBookToLibrary, getAllBooksFromLibrary, lendingBook } = require('../controller/libraryController');


const { protect } = require('../middleware/authMiddleware');

router.post('/library/create', protect, createLibrary);
router.post('/library/join', protect, addLoggedUserToLibrary);
router.post('/library/book/add', protect, addBookToLibrary);
router.post('/library/book/lend', protect, lendingBook );
router.get( '/library/books', protect, getAllBooksFromLibrary);


module.exports = router;
