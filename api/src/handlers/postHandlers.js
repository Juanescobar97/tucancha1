const {createPostDb} = require("../controllers/postController")

const postCarritoHandler = async (req, res) => {
    const {nombre, prenda, precio, userId} = req.body
    try {
        const newPost = await createPostDb(nombre,prenda,precio, userId)
        res.status(200).json(newPost)
    } catch (error) {
        return res.status(400).json({error: error.message })
    }
};

  module.exports = {postCarritoHandler};