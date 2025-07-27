import React from 'react';
import { View } from 'react-native';
import { Text } from 'ui-kit';
import styles from './styles';

type EmptyStateProps = {
  message: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => (
  <View style={styles.centeredContainer}>
    <Text style={styles.emptyText}>{message}</Text>
  </View>
);

export default EmptyState;