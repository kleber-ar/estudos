import usersModel from '../database/models/user.model';
import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt';
import { ServiceResponse } from '../types/ServiceResponse';

async function login(username: string, password: string): Promise<ServiceResponse<{ token: string }>> {
  if (!username || !password) {
    return { status: 'BAD_REQUEST', data: { message: '"username" and "password" are required' } };
  }

  const user = await usersModel.findOne({ where: { username } });

  if (!user) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.dataValues.password);

  if (!isPasswordCorrect) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const token = jwtUtil.sign({ id: user.dataValues.id, userName: user.dataValues.username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default { login };
