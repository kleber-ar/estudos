import products from './products';
import { Product } from './types/types';

export default function findById(productId: number): Product | string {
  const product = products.find((myProduct) => myProduct.id === productId);
  if (product) return product;
  return `Produto com ID ${productId} não encontrado.`;
}
