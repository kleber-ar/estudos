const connection = require('./connection');

async function findAll() {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
}

async function findById(id) {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return product;
}

const insert = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );

  return { id: result.insertId, name };
};

module.exports = {
  findAll,
  findById,
  insert,
};
