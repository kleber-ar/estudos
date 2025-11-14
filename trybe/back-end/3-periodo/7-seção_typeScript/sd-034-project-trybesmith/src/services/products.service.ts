import productsModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';


async function create(product: ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  try {
    const newProduct = await productsModel.create(product);

    return { status: 'CREATED', data: newProduct.dataValues };
  } catch (error) {
    return { status: 'ERROR', data: { message: 'Internal server error' } };
  }
}


export default { create };
