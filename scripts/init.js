const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://192.168.99.100:27017';

let db = null;

const initializeDatabase = async () => {
  const client = await MongoClient.connect(url, {
    auth: { user: 'rebi', password: 'duma' },
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('stackerine');
};

const addProducts = async () => {
  try {
    await deleteCollection();
    const { result } = await db.collection('products').insertMany([
      {
        name: 'little zébré',
        description: 'beautiful crop top',
        price: 98,
        category: 't-shirt',
        url_img:
          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS-2yUd1v6ZZuVaWCmtt7e7zjk6-ZYp3e_KuVPwpNsQvJEbocJD0DKRr7C2Ih7ru_wyrrybfS7SCXVHKxfLx_WipoQQuFrF9MBK5JYrCAg&usqp=CAc',
      },
      {
        name: 'sexy short',
        description: 'short pour être sexy au sport',
        price: 34,
        category: 'sport short',
        url_img:
          'https://www.compagnielesouffle.fr/wp-content/uploads/2018/04/boxer-de-bain-homme-plage.jpg',
      },
      {
        name: 'nice bra',
        description: 'perfect bra for your favorite sport',
        price: 55.99,
        category: 'sport bra',
        url_img:
          'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/oh1zelslagdmdyjk5mlx/brassiere-a-maintien-leger-indy-pour-Rzqkhp.jpg',
      },
      {
        name: 'leggin',
        description: 'good leggin for train',
        price: 100,
        category: 'leggin',
        url_img:
          'https://img.ltwebstatic.com/images2_pi/2018/08/21/15348314713740187429_thumbnail_900x1199.webp',
      },
      {
        name: 'rash guard venum',
        description: 'perfect for good jjb training',
        price: 99,
        category: 'rash guard',
        url_img:
          'https://images-na.ssl-images-amazon.com/images/I/71%2BoK6pQr7L._AC_SX466_.jpg',
      },
    ]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const deleteCollection = () => {
  try {
    return db.collection('products').drop();
  } catch (e) {
    console.log(e);
  }
};

const initialize = async () => {
  await initializeDatabase();
  addProducts();
};
module.exports = { initialize };
