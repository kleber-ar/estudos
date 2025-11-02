/* eslint complexity: "off" */
/* eslint max-lines-per-function: "off" */
const productsModel = require('../models/products.model');

const validateSales = async (req, res, next) => {
  const sales = req.body;
  // Verifica se o body é um array
  if (!Array.isArray(sales)) {
    return res.status(400).json({ message: 'Invalid sales format' });
  }

  // 1️⃣ Verifica se há algum item sem productId
  const missingProductId = sales.some((item) => item.productId === undefined);
  if (missingProductId) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  // 2️⃣ Verifica se há algum item sem quantity
  const missingQuantity = sales.some((item) => item.quantity === undefined);
  if (missingQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  // 3️⃣ Verifica se quantity <= 0
  const invalidQuantity = sales.some((item) => item.quantity <= 0);
  if (invalidQuantity) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  // 4️⃣ Verifica se o productId existe no banco
  const allProducts = await productsModel.findAll();
  const productIds = allProducts.map((p) => p.id);
  const invalidProductId = sales.some(
    (item) => !productIds.includes(item.productId),
  );
  if (invalidProductId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = validateSales;
