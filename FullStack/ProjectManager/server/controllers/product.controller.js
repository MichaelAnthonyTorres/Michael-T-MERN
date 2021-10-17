const Product = require('../models/product.model'); 

const createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err));
}

const getAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err));
}

const getProductById = (req, res) => {
    Product.findById({_id: req.params._id})
    .then(productId => res.json(productId))
    .catch(err => res.json(err));
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById
}