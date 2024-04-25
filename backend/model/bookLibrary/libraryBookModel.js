const mongoose = require('mongoose')
const bookLibraryBookSchema = mongoose.Schema(
    {
        title: { type: String, required: [true, 'Please add a title value']},
        ISBN: {
            type: String,
        },
        language: { 
                    type: String,
                    enmum: ['en', 'de', 'it', 'fr', 'es'], 
                    required: [true, 'Please add a language value']
        },
        author: {
            type: String,
            required: [true, 'Please add an author value']
        },
        publisher: {
            type: String,
            required: [true, 'Please add a publisher value']
        },
        summary: { 
            type: String,
            required: [true, 'Please add a summary value']
        },
        numberOfPages: {
            type: Number,
        },
        year: { 
            type: Number,
            required: [true, 'Please add a year value']
        },
        edition: {
            type: String,
            required: [true, 'Please add an edition value']
        },
        library: { type: mongoose.Schema.Types.ObjectId, required: true, index: true, ref: 'Library_Library'},
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Library_book', bookLibraryBookSchema)