const mongoose = require('mongoose')
const librarySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name of Library is required'], 
        },
        organisation: { type: mongoose.Schema.Types.ObjectId,
            required: true, 
            unique: true,
            ref: 'Organisation'
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Library_Library', librarySchema)