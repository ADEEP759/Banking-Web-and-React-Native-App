export type Customer = {
  id: string;
  name: string;
  email: string;
};

export type Account = {
  id: string;
  accountNumber: string;
  balance: number;
  currency: string;
  customerId: string; // Add this
};

export type Transaction = {
  id: string;
  amount: number;
  description: string;
  date: string;
  type: string;
  accountId: string;
};

export type GraphQLResponse = {
  customers: Customer[];
  accounts: Account[];
  transactions: Transaction[];
};

export type AccountOverviewProps = {
  onAccountSelect: (account: Account) => void;
  selectedAccount: Account | null;
  onShowOverview?: () => void;
};