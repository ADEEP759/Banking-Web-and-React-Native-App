import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
} from 'ui-kit';
import { gql, request } from 'graphql-request';
import {
  AccountOverviewProps,
  GraphQLResponse
} from '../../types';
import LoadingIndicator from './LoadingIndicator';
import ErrorView from './ErrorView';
import EmptyState from './EmptyState';
import AccountsList from './AccountsList';
import TransactionsList from './TransactionsList';
import styles from './styles';

const ACCOUNT_QUERY = gql`
  query GetAccountOverview {
    customers {
      id
      name
      email
    }
    accounts {
      id
      accountNumber
      balance
      currency
      customerId
    }
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

const AccountOverview: React.FC<AccountOverviewProps> = ({
  onAccountSelect,
  selectedAccount
}) => {
  const [data, setData] = useState<GraphQLResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await request<GraphQLResponse>(
          'http://localhost:4000/graphql',
          ACCOUNT_QUERY
        );
        setData(result);
        // if (!selectedAccount && result.accounts.length > 0) {
        //   onAccountSelect(result.accounts[0]);
        // }
      } catch (err) {
        console.error('AccountOverview fetch error:', err);
        setError('Failed to load account data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchData, 500);
    return () => clearTimeout(timer);
  }, []);

  const accountsWithCustomers =
    data?.accounts.map(account => {
      const customer = data.customers.find(c => c.id === account.customerId);
      return {
        ...account,
        customer
      };
    }) || [];

  
  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorView message={error} />;
  if (!data) return <EmptyState message="No account data available" />;

  const filteredTransactions = selectedAccount
    ? data.transactions.filter(t => t.accountId === selectedAccount.id)
    : data.transactions;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Accounts Owerview</Text>

      <AccountsList
        accounts={accountsWithCustomers}
        selectedAccount={selectedAccount}
        onSelect={onAccountSelect}
      />
      <View>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <TransactionsList transactions={filteredTransactions} />
      </View>
    </View>
  );
};

export default AccountOverview;
