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

const updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body, 
        {new:true, runValidators:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err));
}

const deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
    .then(deletedProduct => res.json(deletedProduct))
    .catch(err => res.json(err))
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}