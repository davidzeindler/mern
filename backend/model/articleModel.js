const mongoose = require('mongoose')
const articlesSchema = mongoose.Schema(
    {
        title: { type: String, required: [true, 'Please add a title value']},
        introduction: { type: String, required: [true, 'Please add a introduction value']},
        text: { type: String, required: [true, 'Please add a text value'] },
        author: { type: String, required: [true, 'Please add a author value'] },       
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Article', articlesSchema)