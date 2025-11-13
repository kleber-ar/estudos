import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

/* Esta função recebe um valor do tipo login e retorna uma promise, que envelopa um valor do tipo ServiceResponse, e, por sua vez, também envelopa um valor do tipo _Token_ no cenário de sucesso! */
async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  /* 1. Validação de Dados de Entrada (email/password não vazios) */
  if (!login.email || !login.password) {
    return { status: 'INVALID_DATA', data: { message: 'Dados inválidos' } };
  }

  /* 2. Busca o usuário no banco APENAS UMA VEZ. (Linha 10 original) */
  const foundUser = await UserModel.findOne({ where: { email: login.email } });

  /* 3. Validação de Credenciais (Usuário existe E a senha confere) */
  if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
    /* O bcrypt.compareSync é a forma correta de verificar senhas, substituindo a comparação direta com foundUser.dataValues.password !== login.password */
    return { status: 'UNAUTHORIZED', data: { message: 'E-mail ou senha inválidos' } };
  }

  /* 4. Geração do Token */
  const { id, email } = foundUser.dataValues;

  const token = jwtUtil.sign({ id, email });

  /* 5. Retorno de Sucesso */
  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  verifyLogin,
};
