const getArticle = (req,res) => {
    res.status(200).json({message: 'Get All Articles'});
}

const setArticle = (req, res) => {
    res.status(200).json({message: 'Set Article'});
}

const updateArticle = (req, res) => {
    res.status(200).json({message: 'Update Article'});
}

const deleteArticle = (req, res) => {
    res.status(200).json({message: 'Delete Article'});
}

module.exports = { getArticle, setArticle, updateArticle, deleteArticle }