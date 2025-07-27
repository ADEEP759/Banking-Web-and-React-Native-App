import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#FF3B30',
    marginBottom: 16,
    textAlign: 'center',
  },
});