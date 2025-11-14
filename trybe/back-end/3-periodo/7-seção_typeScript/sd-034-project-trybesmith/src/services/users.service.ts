import UserModel from '../database/models/user.model';
import ProductModel from '../database/models/product.model';
import { ListUser } from '../types/User';
import { ServiceResponse } from '../types/ServiceResponse';

async function getAll(): Promise<ServiceResponse<ListUser[]>> {
  const users = await UserModel.findAll();

  const usersData = await Promise.all(
    users.map(async (user) => {
      const userData = user.get();

      const products = await ProductModel.findAll({
        where: { userId: userData.id },
      });

      return {
        username: userData.username,
        productIds: products.map((p) => p.get().id),
      };
    })
  );

  return { status: 'SUCCESSFUL', data: usersData };
}

export default {
  getAll,
};

