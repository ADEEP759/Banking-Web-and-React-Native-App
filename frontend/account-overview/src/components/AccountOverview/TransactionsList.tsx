import React from 'react';
import { View } from 'react-native';
import TransactionCard from './TransactionCard';
import EmptyState from './EmptyState';
import { Transaction } from '../../types';
import styles from './styles';

type TransactionsListProps = {
  transactions: Transaction[];
};

const TransactionsList: React.FC<TransactionsListProps> = ({ transactions }) => {
  if (transactions.length === 0) {
    return <EmptyState message="No recent transactions" />;
  }

  return (
    <View style={styles.listContainer}>
      {transactions.slice(0,3).map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </View>
  );
};

export default TransactionsList;