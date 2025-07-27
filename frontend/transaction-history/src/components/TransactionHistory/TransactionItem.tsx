import React from 'react';
import { View, Text, Card } from 'ui-kit';
import { StyleSheet } from 'react-native';
import { Transaction } from '../../types/Transaction';
import { getCardStyle } from './styles';

type TransactionItemProps = {
  transaction: Transaction;
  formatAmount: (amount: number, type: string) => string;
  formatDate: (dateString: string) => string;
};

export const TransactionItem = ({ 
  transaction,
  formatAmount,
  formatDate
}: TransactionItemProps) => {
  return (
    <Card
      key={transaction.id}
      title={transaction.description}
      style={[styles.card, getCardStyle(transaction.type, transaction.status)]}
    >
      <View style={styles.transactionHeader}>
        <Text style={styles.amountText}>{formatAmount(transaction.amount, transaction.type)}</Text>
      </View>
      <View style={styles.transactionDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date:</Text>
          <Text style={styles.detailValue}>{formatDate(transaction.date)}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1c1c1e',
  },
  transactionDetails: {
    marginTop: 8,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 14,
    color: '#8e8e93',
    width: 80,
  },
  detailValue: {
    fontSize: 14,
    color: '#1c1c1e',
    flex: 1,
  },
});