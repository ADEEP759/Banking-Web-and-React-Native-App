import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'ui-kit';
import { Transaction } from '../../types';
import styles from './styles';

type TransactionCardProps = {
  transaction: Transaction;
};

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => (
  <Card 
    title={transaction.description}
    style={[
      styles.card,
      transaction.type === 'CREDIT' ? styles.creditCard : styles.debitCard
    ]}
  >
    <View style={styles.transactionDetails}>
      <Text style={[
        styles.amountText,
        transaction.type === 'CREDIT' ? styles.creditText : styles.debitText
      ]}>
        {transaction.type === 'CREDIT' ? '+' : '-'}
        {Math.abs(transaction.amount).toLocaleString()}
      </Text>
      <Text style={styles.dateText}>
        {new Date(transaction.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })}
      </Text>
    </View>
  </Card>
);

export default TransactionCard;