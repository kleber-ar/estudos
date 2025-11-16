import Joi from 'joi';
import { ServiceResponse } from '../types/ServiceResponse';
import usersModel from '../database/models/user.model';
import { ProductInputtableTypes } from '../database/models/product.model';

export async function validateProduct(product: ProductInputtableTypes): Promise<ServiceResponse<{}> | null> {
  // Validação de presença (400)
  const requiredSchema = Joi.object({
    name: Joi.required().messages({ 'any.required': '"name" is required' }),
    price: Joi.required().messages({ 'any.required': '"price" is required' }),
    userId: Joi.required().messages({ 'any.required': '"userId" is required' }),
  });

  const requiredCheck = requiredSchema.validate(product, { abortEarly: true });
  if (requiredCheck.error) {
    return { status: 'BAD_REQUEST', data: { message: requiredCheck.error.message } };
  }

  // Validação de tipo e tamanho (422)
  const typeSchema = Joi.object({
    name: Joi.string().min(3).messages({
      'string.base': '"name" must be a string',
      'string.min': '"name" length must be at least 3 characters long'
    }),
    price: Joi.string().min(3).messages({
      'string.base': '"price" must be a string',
      'string.min': '"price" length must be at least 3 characters long'
    }),
    userId: Joi.number().strict().messages({
      'number.base': '"userId" must be a number'
    }),
  });

  const typeCheck = typeSchema.validate(product, { abortEarly: true });
  if (typeCheck.error) {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: typeCheck.error.message } };
  }

  // Verifica se usuário existe
  const userExists = await usersModel.findByPk(product.userId);
  if (!userExists) {
    return { status: 'UNPROCESSABLE_ENTITY', data: { message: '"userId" not found' } };
  }

  return null;
}
