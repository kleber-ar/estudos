const connection = require('./connection');

async function findAll() {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
}

async function findById(id) {
  const [product] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
}

module.exports = { findAll, findById };
