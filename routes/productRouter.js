const express = require('express');
const ProductCtrl = require('../controllers/ProductCtrl');
const productRouter = express.Router();

productRouter.post('/', ProductCtrl.addProducts);

productRouter.delete('/:id', ProductCtrl.deleteProductCtrl);

productRouter.get('/', ProductCtrl.getProducts);

productRouter.put('/:id', ProductCtrl.updateProduct);

module.exports = productRouter;
