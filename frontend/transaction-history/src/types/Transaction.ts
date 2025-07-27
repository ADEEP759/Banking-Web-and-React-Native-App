export type Transaction = {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'CREDIT' | 'DEBIT' | 'TRANSFER';
  category: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  accountId: string;
};

export type TransactionHistoryProps = {
  accountId?: string;
};