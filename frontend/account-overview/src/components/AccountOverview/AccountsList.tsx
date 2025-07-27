import React from 'react';
import { View } from 'react-native';
import AccountCard from './AccountCard';
import { Account } from '../../types';
import styles from './styles';

type AccountsListProps = {
    accounts: Array<Account & { customer?: { name: string; email: string } }>;
    selectedAccount: Account | null;
    onSelect: (account: Account) => void;
};

const AccountsList: React.FC<AccountsListProps> = ({
    accounts,
    selectedAccount,
    onSelect,
}) => (
    <View style={styles.listContainer}>
        {accounts.map((account) => (
            <AccountCard
                key={account.id}
                account={account}
                customer={account.customer}
                isSelected={account.id === selectedAccount?.id}
                onSelect={() => onSelect(account)}
            />
        ))}
    </View>
);

export default AccountsList;


