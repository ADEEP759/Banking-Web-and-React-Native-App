import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Transaction } from '../../types/Transaction';
import { TransactionItem } from './TransactionItem';

type TransactionListProps = {
  transactions: Transaction[];
  accountId?: string;
  formatAmount: (amount: number, type: string) => string;
  formatDate: (dateString: string) => string;
};

export const TransactionList = ({ 
  transactions, 
  accountId,
  formatAmount,
  formatDate
}: TransactionListProps) => {
  if (transactions.length === 0) {
    return null;
  }

  return (
    <FlatList
      data={transactions}
      renderItem={({ item }) => (
        <TransactionItem 
          transaction={item} 
          formatAmount={formatAmount}
          formatDate={formatDate}
        />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={() => (
        <Text style={styles.summaryText}>
          Showing {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
          {accountId ? ` for account #${accountId.slice(-4)}` : ''}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
  summaryText: {
    fontSize: 14,
    color: '#8e8e93',
    marginBottom: 12,
  },
});