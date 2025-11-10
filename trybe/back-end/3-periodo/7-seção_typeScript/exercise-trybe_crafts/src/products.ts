import { Product } from './types/types';

const products: Product[] = [
  {
    id: 1,
    name: 'Camiseta',
    price: 29.9,
    quantity: 3,
    brands: ['Nike', 'Reebok'],
  },
  {
    id: 2,
    name: 'Caneca',
    price: 19.90,
    quantity: 12,
    brands: ['Stanley', 'Camelbak'],
  },
  {
    id: 3,
    name: 'Boné',
    price: 39.90,
    quantity: 0,
    brands: [],
  },
];

export default products; // Exporta a constante declarada
