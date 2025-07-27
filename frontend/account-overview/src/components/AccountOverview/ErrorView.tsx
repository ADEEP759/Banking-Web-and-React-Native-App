import React from 'react';
import { View } from 'react-native';
import { Text } from 'ui-kit';
import styles from './styles';

type ErrorViewProps = {
  message: string;
};

const ErrorView: React.FC<ErrorViewProps> = ({ message }) => (
  <View style={styles.centeredContainer}>
    <Text style={styles.errorText}>{message}</Text>
  </View>
);

export default ErrorView;