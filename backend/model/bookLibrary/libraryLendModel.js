const mongoose = require('mongoose')
const libraryLendSchema = mongoose.Schema(
    {
        LendingBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true, 
            ref: 'User'
        },
        book: {
            type: mongoose.Schema.Types.ObjectId,
            required: true, 
            ref: 'Book'
        },
        startLending: {
            type: Date,
            default: Date.now
        },
        endLending: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Library_lend', libraryLendSchema)