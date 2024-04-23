const mongoose = require('mongoose')
const bookLibraryMemberSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId,
            required: true, 
            index: true,
            unique: true,
            ref: 'User'
        },
        enabled: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('bookLibraryMember', bookLibraryMemberSchema)