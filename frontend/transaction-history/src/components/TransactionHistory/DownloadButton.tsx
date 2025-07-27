import React from 'react';
import { Button } from 'ui-kit';
import { StyleSheet } from 'react-native';
import { Transaction } from '../../types/Transaction';

type DownloadButtonProps = {
  transactions: Transaction[];
  accountId?: string;
  formatDate: (dateString: string) => string;
};

export const DownloadButton = ({ 
  transactions,
  accountId,
  formatDate
}: DownloadButtonProps) => {
  const downloadCSV = () => {
    if (transactions.length === 0) return;

    const header = 'Date,Description,Amount,Type';
    const rows = transactions.map((txn) =>
      `${formatDate(txn.date)},"${txn.description}",${txn.amount},${txn.type}`
    );
    const csv = [header, ...rows].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transactions${accountId ? `_acct_${accountId}` : ''}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      title="Export CSV"
      onPress={downloadCSV}
      style={styles.exportButton}
    />
  );
};

const styles = StyleSheet.create({
  exportButton: {
    backgroundColor: '#2a7bc6ff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});