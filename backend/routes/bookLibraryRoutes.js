const express = require('express');
const router = express.Router();

const { createAnBookLibraryOrganisation, addBookToOrganisation, getAccessToBookLibraryOrganisation,getAllBookLibraryOrganisations, getAllBooks } = require('../controller/booklibraryController');


const { protect } = require('../middleware/authMiddleware');

router.post('/books/1', protect, createAnBookLibraryOrganisation);
router.post('/books/2', protect, getAccessToBookLibraryOrganisation);
router.post('/books/3', protect, addBookToOrganisation);
router.get( '/books/4', getAllBookLibraryOrganisations);
// router.get( '/books/5', getAllBooks);

module.exports = router;
