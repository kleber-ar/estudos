import productsModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  const newProduct = await productsModel.create(product);

  return { status: 'CREATED', data: newProduct.dataValues };
}

export default { create };
