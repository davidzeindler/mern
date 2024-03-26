const getArticle = (req,res) => {
    res.status(200).json({message: 'Get All Articles'});
}

const setArticle = (req, res) => {
    res.status(200).json({message: 'Set Article'});
}

const updateArticle = (req, res) => {
    res.status(200).json({message: `Update Article ${req.params.id}`});
}

const deleteArticle = (req, res) => {
    res.status(200).json({message: `Delete Article ${req.params.id}`});
}

module.exports = { getArticle, setArticle, updateArticle, deleteArticle }