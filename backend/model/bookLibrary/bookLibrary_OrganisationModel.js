const mongoose = require('mongoose')
const organisationSchema = mongoose.Schema(
    {
        organisation: { type: mongoose.Schema.Types.ObjectId,
            required: true, 
            index: true,
            unique: true,
            ref: 'Organisation'
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('bookLibraryOrganisation', organisationSchema)