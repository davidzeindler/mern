const mongoose = require('mongoose')
const articlesSchema = mongoose.Schema(
    {
        title: { type: String, required: [true, 'Please add a title value']},
        introduction: { type: String, required: [true, 'Please add a introduction value']},
        text: { type: String, required: [true, 'Please add a text value'] },     
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Article', articlesSchema)