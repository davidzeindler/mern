const mongoose = require('mongoose')
const bookLibraryOrganisationSchema = mongoose.Schema(
    {
        organisation: {
            type: String, 
            required: [true, 'Please add a organisation value']
        },
        contactFirstname: {
            type: String, 
            required: [true, 'Please add a firstname value']
        },
        contancLastname: {
            type: String, 
            required: [true, 'Please add a lastname value']
        },
        contactEmail: {
            type: String,
            required: [true, 'Please add a Email value']
        },
        Address: [{
            street: { type: String, required: [true, 'Please add a street value']}, 
            streetNumber: { type: String, required: [true, 'Please add a streetNumber value']},
            zipCode: { type: String, required: [true, 'Please add a zipCode value']},
            location: {type: String, required: [true, 'Please add a location value']},
            country:  {type: String, required: [true, 'Please add a country value']},
        }],
        PaymentBankAddress: [{
            bankname: { type: String, required: [true, 'Please add a bankname value']}, 
            AccountHolder: { type: String, required: [true, 'Please add a account holder value']},
            bic: { type: String, required: [true, 'Please add a BIC value']},
            iban: {type: String, required: [true, 'Please add a IBAN value']},
        }],
        TwintAddress: [{
            bankname: { type: String, required: [true, 'Please add a bankname value']}, 
            codeNumber: { type: number, required: [true, 'Please add a code number value']}, 
        }],
        lastUpdated: {
            type: Date,
            default: Date.now
        },
        lastUpdatedBy: {
             organisation: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('BookLibrary_Organisation', bookLibraryOrganisationSchema)