const connection = require('./connection');

async function findAll() {
  const [sales] = await connection.execute(
    `SELECT
      sp.sale_id AS saleId,
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM sales_products AS sp
    INNER JOIN sales AS s ON s.id = sp.sale_id
    ORDER BY sp.sale_id, sp.product_id;`,
  );
  return sales;
}

async function findById(id) {
  const [sale] = await connection.execute(
    `SELECT
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM sales_products AS sp
    INNER JOIN sales AS s ON s.id = sp.sale_id
    WHERE sp.sale_id = ?
    ORDER BY sp.sale_id, sp.product_id;`,
    [id],
  );
  return sale;
}

const insert = async (itemsSold) => {
  const [result] = await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW())',
  );

  const saleId = result.insertId;

  const insertPromises = itemsSold.map(({ productId, quantity }) =>
    connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, productId, quantity],
    ));

  await Promise.all(insertPromises);

  return { id: saleId, itemsSold };
};

const deleteById = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM sales WHERE id = ?',
    [id],
  );
  return result.affectedRows; // retorna 1 se deletou, 0 se não encontrou
};

const updateQuantity = async (saleId, productId, quantity) => {
  const [result] = await connection.execute(
    `UPDATE sales_products 
     SET quantity = ? 
     WHERE sale_id = ? AND product_id = ?`,
    [quantity, saleId, productId],
  );
  return result.affectedRows;
};

const findSaleProduct = async (saleId, productId) => {
  const [rows] = await connection.execute(
    `SELECT sp.sale_id AS saleId, sp.product_id AS productId, sp.quantity, s.date
     FROM sales_products AS sp
     INNER JOIN sales AS s ON s.id = sp.sale_id
     WHERE sp.sale_id = ? AND sp.product_id = ?`,
    [saleId, productId],
  );
  return rows[0];
};

module.exports = {
  updateQuantity,
  findSaleProduct,
  findAll,
  findById,
  insert,
  deleteById,
};
