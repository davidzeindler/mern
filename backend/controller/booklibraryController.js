const asyncHandler = require('express-async-handler')
const MemberModel = require('../model/bookLibrary/bookLibrary_MemberModel')
const Organisation = require('../model/bookLibrary/bookLibrary_OrganisationModel')
const Book = require('../model/bookLibrary/bookLibrary_BookModel')


const createAnBookLibraryOrganisation = asyncHandler(async(req, res) => {
    console.log(req.body);
    if(!(req.body.organisationName || req.body.contactFirstname || req.body.contactLastname || req.body.contactEmail )){
        res.status(400);
        throw  new Error('Please enter a Organisation');
    }
    console.log(req.body);
    const book = await Organisation.create(
        {
            organisationName: req.body.organisationName,
            contactFirstname: req.body.contactFirstname,
            contactLastname: req.body.contactLastname,
            contactEmail: req.body.contactEmail,
            street: req.body.street,
            streetnumber: req.body.streetnumber,
            zipCode: req.body.zipCode,
            location: req.body.location,
            country: req.body.country,
        });  
    res.status(200).json(book);
})

const getAllBookLibraryOrganisations = asyncHandler(async(req,res) => {
    const organisations = await Organisation.find({user: req.user.id});
    res.status(200).json(organisations);
})

const getAccessToBookLibraryOrganisation = asyncHandler(async(req, res) => {
        const libraryMember = await MemberModel.create(
            {
                user: req.user.id,
                enabled: true,
            }
        )
        res.status(200).json(libraryMember);
})

const addBookToOrganisation = asyncHandler(async(req, res) => {
    if(!(req.body.title || req.body.language || req.body.author || req.body.publisher || req.body.summary || req.body.year || req.body.edition )){
        res.status(400);
        throw  new Error('Please enter a Book');
    }
    const book = await Book.create(
        {
            title: req.body.title,
            language: req.body.language,
            author: req.body.author,
            publisher: req.body.publisher,
            summary: req.body.summary,
            year: req.body.year,
            edition: req.body.edition,
            organisation: req.body.organisation
        });  
    res.status(200).json(book);
})

const getAllBooks = asyncHandler(async(req,res) => {
    const books = await BookLibrary_Book.find({user: req.user.organisation});
    res.status(200).json(books);
})

module.exports = { getAllBooks, addBookToOrganisation, getAccessToBookLibraryOrganisation, getAllBookLibraryOrganisations, createAnBookLibraryOrganisation }
