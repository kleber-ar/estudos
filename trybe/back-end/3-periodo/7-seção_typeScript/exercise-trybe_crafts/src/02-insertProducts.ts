import { Product } from './types/types';

export default function insertProducts(availableBrands: string[], product: Product): string {
  if (product.brands.every((brand) => availableBrands.includes(brand))) {
    return `${product.name} adicionado(a) com o preço de R$ ${product.price}`;
  }

  return 'Seu produto contém marcas indisponíveis.';
}

