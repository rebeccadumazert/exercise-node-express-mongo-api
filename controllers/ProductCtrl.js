const productsStore = require('../stores/mongoStore');

const addProducts = async (req, res) => {
  try {
    const { body: product } = req;
    await productsStore.addProduct(product);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
  }
};

const deleteProductCtrl = async (req, res) => {
  const id = req.params.id;
  try {
    await productsStore.deleteProduct(id);
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
  }
};

const getProducts = async (req, res) => {
  try {
    console.log(req.query);
    const {
      query: { page = 0, sort = 'name', order = 1 },
    } = req;
    const products = await productsStore.getProductsStore(page, sort, order);
    res.json(products);
  } catch (e) {
    console.error(e);
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      params: { id },
      body: product,
    } = req;
    await productsStore.updateProductStore(id, product);
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { addProducts, deleteProductCtrl, getProducts, updateProduct };
