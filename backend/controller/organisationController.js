const asyncHandler = require('express-async-handler')
const Organisation = require('../model/organisationModel');


const createOrganisation = asyncHandler(async(req, res) => {
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

module.exports = { createOrganisation }