const mongoose = require('mongoose')
const bookLibraryMemberSchema = mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId,
            required: true, 
            index: true,
            ref: 'User'
        },
        enabled: {
            type: Boolean,
            default: false
        },
        deactivationNote: {
            type: String,
        },
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

module.exports = mongoose.model('bookLibrary_Member', bookLibraryMemberSchema)