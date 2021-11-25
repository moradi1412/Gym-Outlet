const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Men' },
    { name: 'Women' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Amazing T-Shirt',
      description:
        'Regular fit, Lightweight, stretchy material,Sweat-wicking capabilities',
      image: '01.jpg',
      category: categories[0]._id,
      price: 35.99,
      quantity: 10
    },
    {
      name: 'Arival Tank',
      description:
        'Perform more in the classic Arrival Tank. This tank boasts fundamental performance technology for next-level results',
      image: '02.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 20
    },
    {
      name: 'Amazing Hoodie',
      category: categories[0]._id,
      description:
        'Always be ready to work out with purpose in the Amazing Hoodie.',
      image: '03.jpg',
      price: 45.99,
      quantity: 60
    },
    {
      name: 'Pro Shorts ',
      category: categories[0]._id,
      description:
        '- Slim fit - 7” in-seam- Raw edge hem- Adjustable drawcord waist',
      image: '04.jpg',
      price: 10.99,
      quantity: 70
    },
    {
      name: 'TRAINING MESH POCKET LEGGINGS',
      category: categories[1]._id,
      description:
        'The Training Mesh Pocket Leggings are the latest addition to your essentials. Take a perfect pair of high-waisted leggings, add some mesh, and you’ve got these beauties',
      image: '05.jpg',
      price: 30.99,
      quantity: 10
    },
    {
      name: 'FLEX SHORTS',
      category: categories[1]._id,
      description:
        'There’s only one way to Flex, and that’s your way. Say hello to the Flex Shorts. A flattering mid-rise fit, body contouring and our distinct jacquard logo elastic waistband get you ready for any workout you choose',
      image: '06.jpg',
      price: 55.99,
      quantity: 30
    },
    {
      name: 'APOLLO GRAPHIC T-SHIRT',
      category: categories[1]._id,
      description:
        'The Apollo Graphic T-Shirt has been carefully designed to make sure it’s your new go-to-tee. It features a classic t-shirt shape with a round neck, short sleeves and a flattering scooped hem',
      image: '07.jpg',
      price: 50.99,
      quantity: 30
    },
    {
      name: 'VITAL SEAMLESS 2.0 LEGGINGS',
      category: categories[1]._id,
      description:
        'Train, sweat and perform in the Vital Seamless 2.0 Leggings. Combining a high-waisted fit, sweat-wicking fabric and seamless contours, they’re constructed to ensure confidence and support for a workout, with additional style for good measure',
      image: '08.jpg',
      price: 100.99,
      quantity: 100
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Greg',
    lastName: 'House',
    email: 'greg@gmail.com',
    password: 'greg123',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'a',
    lastName: 'House',
    email: 'a@test.com',
    password: '123456',
    orders: [
      {
        products: []
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});
