import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gql, request } from 'graphql-request';
import { 
  TransactionItem,
  TransactionList,
  DownloadButton,
  LoadingIndicator,
  ErrorMessage,
  EmptyState,
  styles as transactionStyles
} from './components/TransactionHistory';
import { TransactionHistoryProps, Transaction } from './types/Transaction';

const TRANSACTION_QUERY = gql`
  query GetTransactions {
    transactions {
      id
      amount
      description
      date
      type
      accountId
    }
  }
`;

const formatAmount = (amount: number, type: string): string => {
  return `${type === 'DEBIT' ? '-' : '+'}₹${Math.abs(amount).toLocaleString('en-IN')}`;
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString();
};

const App = ({ accountId }: TransactionHistoryProps) => {
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredTransactions = useMemo(() => {
    if (!accountId) return [];
    return allTransactions.filter(txn => txn.accountId === accountId);
  }, [allTransactions, accountId]);

  useEffect(() => {
    if (!accountId) {
      setError('No account selected');
    } else {
      setError(null);
    }
  }, [accountId]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const data = await request<{ transactions: Transaction[] }>(
          'http://localhost:4000/graphql',
          TRANSACTION_QUERY
        );
        setAllTransactions(data.transactions);
        setError(null);
      } catch (err) {
        console.error('Error fetching transactions:', err);
        setError('Failed to load transactions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <View style={transactionStyles.container}>
      <View style={transactionStyles.header}>
        <Text style={transactionStyles.title}>
          {accountId ? `Transactions for Account #${accountId.slice(-4)}` : 'All Transactions'}
        </Text>
        {filteredTransactions.length > 0 && (
          <DownloadButton 
            transactions={filteredTransactions} 
            accountId={accountId} 
            formatDate={formatDate}
          />
        )}
      </View>

      {filteredTransactions.length === 0 ? (
        <EmptyState accountId={accountId} />
      ) : (
        <TransactionList 
          transactions={filteredTransactions} 
          accountId={accountId}
          formatAmount={formatAmount}
          formatDate={formatDate}
        />
      )}
    </View>
  );
};

export default App;