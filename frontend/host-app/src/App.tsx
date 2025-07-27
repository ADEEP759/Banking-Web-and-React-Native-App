import React, { Suspense, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { View,Text } from 'ui-kit';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Layout from './components/Layout';

const AccountOverview = React.lazy(() => import('account_overview/App'));
const TransactionHistory = React.lazy(() => import('transaction_history/App'));

type Account = {
  id: string;
  accountNumber: string;
  balance: number;
  currency: string;
};

const App = () => {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'transactions'>('overview');

  const handleAccountSelect = (account: Account) => {
    setSelectedAccount(account);
    setActiveTab('transactions'); // Auto-switch to transactions tab
  };

  return (
    <Layout>
      <Header title="Banking App By Arundeep" />
      <Navigation activeTab={activeTab} onTabChange={(tab: string) => setActiveTab(tab as 'overview' | 'transactions')} />
      <Suspense fallback={<LoadingIndicator />}>
        {activeTab === 'overview' ? (
          <AccountOverview 
            onAccountSelect={handleAccountSelect} 
            selectedAccount={selectedAccount}
          />
        ) : (
          <TransactionHistory accountId={selectedAccount?.id} />
        )}
      </Suspense>
    </Layout>
  );
};

const LoadingIndicator = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#007AFF" />
    <Text style={styles.loadingText}>Loading banking data...</Text>
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
});

export default App;