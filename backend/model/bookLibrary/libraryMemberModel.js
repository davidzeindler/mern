const mongoose = require('mongoose')
const libraryMemberSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId,
            required: true, 
            ref: 'User'
        },
        library: { type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Library_Library'
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Library_member', libraryMemberSchema)