const mongoose = require('mongoose')
const bookLibraryBorrowedSchema = mongoose.Schema(
    {
        borrowedBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true, 
            index: true,
            ref: 'bookLibraryMember'
        },
        borrowedBook: {
            type: mongoose.Schema.Types.ObjectId,
            required: true, 
            ref: 'Book'
        },
        start: {
            type: Date,
            default: Date.now
        },
        end: {
            type: Date,
            required: [true, 'Please add a end date value']

        }


    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('BookLibrary_Borrowed', bookLibraryBorrowedSchema)