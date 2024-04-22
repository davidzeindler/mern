const mongoose = require('mongoose')
const bookLibraryBookSchema = mongoose.Schema(
    {
        title: { type: String, required: [true, 'Please add a title value']},
        language: { 
                    type: String,
                    enmum: ['en', 'de', 'it', 'fr', 'es'], 
                    required: [true, 'Please add a language value']
        },
        authors: [{
            type: String,
            required: [true, 'Please add a at least one author value']
        }],
        publisher: {
            type: String,
            required: [true, 'Please add a publisher value']
        },
        summary: { 
            type: String,
            required: [true, 'Please add a summary value']
        },
        year: { 
            type: Number,
            required: [true, 'Please add a year value']
        },
        edition: {
            type: String,
            required: [true, 'Please add a edition value']
        },
        organisation: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'BookLibraryOrganisation'},
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

module.exports = mongoose.model('BookLibrary_Book', bookLibraryBookSchema)