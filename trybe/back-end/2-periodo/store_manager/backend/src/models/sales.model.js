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
  const [[sale]] = await connection.execute(
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

module.exports = { findAll, findById };
