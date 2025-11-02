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

const update = async (id, name) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, id],
  );
};

const remove = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [id],
  );
  return result.affectedRows; // retorna quantas linhas foram afetadas
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove,
};
