import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type EmptyStateProps = {
  accountId?: string;
};

export const EmptyState = ({ accountId }: EmptyStateProps) => {
  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateText}>No transactions found</Text>
      {accountId && (
        <Text style={styles.emptyStateSubText}>
          No transactions recorded for this account
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 18,
    color: '#8e8e93',
    marginBottom: 8,
  },
  emptyStateSubText: {
    fontSize: 14,
    color: '#c7c7cc',
    textAlign: 'center',
  },
});