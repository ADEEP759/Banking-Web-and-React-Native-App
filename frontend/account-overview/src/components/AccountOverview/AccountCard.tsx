import React from 'react';
import { Card, Text, Button, View } from 'ui-kit';
import { Account } from '../../types';
import styles from './styles';

type AccountCardProps = {
    account: Account;
    customer?: {
        name: string;
        email: string;
    };
    isSelected: boolean;
    onSelect: () => void;
};

const AccountCard: React.FC<AccountCardProps> = ({
    account,
    customer,
    isSelected,
    onSelect,

}) => (
    <Card
        title={``}
        style={[
            styles.card,
            isSelected && styles.selectedCard
        ]}
    >
        <View style={styles.cardContent}>
            {customer && (
                <View style={styles.customerInfo}>
                    <Text style={styles.customerName}>{customer.name}</Text>
                    <Text style={styles.accountNumber}>Account No. : {account.accountNumber}</Text>
                    <Text style={styles.customerEmail}>{customer.email}</Text>
                </View>
            )}
            <Text style={styles.balanceText}>
                Balance: {account.balance.toLocaleString()} {account.currency}
            </Text>
            <View style={styles.buttonGroup}>
                <Button
                    onPress={onSelect}
                    title="View Transactions"
                    style={styles.actionButton}
                />
            </View>
        </View>
    </Card>
);

export default AccountCard;