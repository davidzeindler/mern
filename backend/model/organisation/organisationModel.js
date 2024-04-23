const mongoose = require('mongoose')
const organisationSchema = mongoose.Schema(
    {
        organisationName: {
            type: String, 
            required: [true, 'Please add a organisation value']
        },
        contactFirstname: {
            type: String, 
            required: [true, 'Please add a firstname value']
        },
        contactLastname: {
            type: String, 
            required: [true, 'Please add a lastname value']
        },
        contactEmail: {
            type: String,
            required: [true, 'Please add a Email value']
        },
        street: { type: String, required: [true, 'Please add a street value']}, 
        zipCode: { type: String, required: [true, 'Please add a zipCode value']},
        location: {type: String, required: [true, 'Please add a location value']},
        country:  {type: String, required: [true, 'Please add a country value']},
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Organisation', organisationSchema)