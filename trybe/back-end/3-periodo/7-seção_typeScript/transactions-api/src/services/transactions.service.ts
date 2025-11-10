import TransactionModel, {
  TransactionInputtableFields,
} from '../database/models/transaction.model';

async function create(transaction: TransactionInputtableFields) {
  const newTransaction = await TransactionModel.create(transaction);

  return newTransaction.dataValues;
}

export default {
  create,
};
