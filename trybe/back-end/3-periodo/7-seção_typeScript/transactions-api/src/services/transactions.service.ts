import TransactionModel, {
  TransactionInputtableFields,
} from '../database/models/transaction.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Transaction } from '../types/Transaction';

function validateParams({
  name,
  price,
  type,
  userId,
}: TransactionInputtableFields): string | null {
  if (!name) return 'Name is required';
  if (!price) return 'Price is required';
  if (!type) return 'Type is required';
  if (!userId) return 'userId is required';

  return null;
}

async function create(transaction: TransactionInputtableFields): Promise<ServiceResponse<Transaction>> {
  let responseService: ServiceResponse<Transaction>;
  const error = validateParams(transaction);

  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }
  const newTransaction = await TransactionModel.create(transaction);

  responseService = { status: 'SUCCESSFUL', data: newTransaction.dataValues };

  return responseService;
}

export default {
  create,
};
