const asyncHandler = require('express-async-handler')
const dayjs = require('dayjs')
const LibraryMember = require('../model/bookLibrary/libraryMemberModel')
const OrgLibrary = require('../model/bookLibrary/libraryLibraryModel')
const Organisation = require('../model/organisationModel')
const LibraryBook = require('../model/bookLibrary/libraryBookModel')
const BookInCirculations  = require('../model/bookLibrary/libraryLendModel')


const createLibrary = asyncHandler(async(req, res) => {
    if(!(req.body.organisationId || req.body.libraryName )){
        res.status(400);
        throw  new Error('Please enter a Library');
    }

    const organisation = await Organisation.findById(req.body.organisationId);

    if(organisation)
    {
        const newLibrary = await OrgLibrary.create(
            {
                name: req.body.libraryName,
                organisation: organisation.id,
            });  
        res.status(200).json(newLibrary);
    }
});

const addLoggedUserToLibrary = asyncHandler(async(req, res) => {
    if(!(req.user.id || req.body.libraryId  )) {
        res.status(400);
        throw  new Error('There was none user id');
    }
    // Todo: MUST check if LibraryMember exists before takeover libraryId
    const orgLibrary = await OrgLibrary.findById(req.body.libraryId);
    if(orgLibrary){
        const libraryMember = await LibraryMember.create({
            user: req.user.id,
            library: orgLibrary.id,
        });
        
        res.status(200).json(libraryMember);
    }
    
});

const addBookToLibrary = asyncHandler(async(req, res) => {
    if(!(req.body.title || req.body.language || req.body.author || req.body.publisher || req.body.summary || req.body.year || req.body.edition )){
        res.status(400);
        throw  new Error('Please enter a book');
    }
    const book = await LibraryBook.create(
        {
            title: req.body.title,
            language: req.body.language,
            author: req.body.author,
            publisher: req.body.publisher,
            summary: req.body.summary,
            year: req.body.year,
            edition: req.body.edition,
            library: req.body.libraryId
        });  
    res.status(200).json(book);
})


const getAllBooksFromLibrary = asyncHandler(async(req,res) => {
    if(req.body.libraryId) {
        const books = await LibraryBook.find({user: req.body.libraryId});
        res.status(200).json(books);
    }
})

const lendingBook = asyncHandler(async(req,res) => {
    if(!(req.body.bookId || req.body.startLending)) {
        res.status(400);
        throw new Error('Please enter a book');
    }
    
    const book = await LibraryBook.findById(req.body.bookId);

    if(book) {
        const bookInCirculations = await BookInCirculations.create(
            {
                LendingBy: req.user.id,
                book: book.id,
                startLending: dayjs(),
                endLending: dayjs().add(1, 'month'),
            }
        )
        res.status(200).json(bookInCirculations);
    }       
});

module.exports = { createLibrary, addLoggedUserToLibrary, addBookToLibrary, getAllBooksFromLibrary, lendingBook }
