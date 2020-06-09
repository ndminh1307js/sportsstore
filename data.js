const faker = require('faker');
const products = [];
const categories = ['Watersports', 'Soccer', 'Chess', 'Running'];
faker.seed(100);

for (let i = 1; i <= 101; i++) {
  const category = faker.helpers.randomize(categories);
  products.push({
    id: i,
    name: faker.commerce.productName(),
    category,
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: Number(faker.commerce.price()),
  });
}

const orders = [];

for (let i = 1; i <= 101; i++) {
  const fname = faker.name.firstName();
  const sname = faker.name.lastName();

  const order = {
    id: i,
    name: `${fname} ${sname}`,
    email: faker.internet.email(fname, sname),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
    shipped: faker.random.boolean(),
    products: [],
  };

  const productCount = faker.random.number({ min: 1, max: 5 });
  const product_ids = [];

  while (product_ids.length < productCount) {
    let candidateId = faker.random.number({ min: 1, max: products.length });
    if (product_ids.indexOf(candidateId) === -1) {
      product_ids.push(candidateId);
    }
  }

  for (let j = 0; j < productCount; j++) {
    order.products.push({
      quantity: faker.random.number({ min: 1, max: 10 }),
      product_id: product_ids[j],
    });
  }

  orders.push(order);
}

module.exports = function () {
  return {
    categories,
    products,
    orders,
  };
};
