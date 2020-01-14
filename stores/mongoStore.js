const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://192.168.99.100:27017';

let db = null;

const NB_PRODUCTS = 2;

const ObjectId = require('mongodb').ObjectID;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(url, {
    auth: { user: 'rebi', password: 'duma' },
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('stackerine');
};

initializeDatabase();

const addProduct = product => {
  return db.collection('products').insertOne(product);
};

const deleteProduct = id => {
  return db.collection('products').deleteOne({ _id: ObjectId(id) });
};

const getProductsStore = (page, sort, order) => {
  console.log(page, sort, order);
  return db
    .collection('products')
    .find({})
    .sort({ [sort]: Number(order) })
    .skip(NB_PRODUCTS * Number(page))
    .limit(NB_PRODUCTS)
    .toArray();
};

const updateProductStore = (id, product) => {
  return db
    .collection('products')
    .updateOne({ _id: ObjectId(id) }, { $set: product });
};

module.exports = {
  addProduct,
  deleteProduct,
  getProductsStore,
  updateProductStore,
};
