import { StyleSheet } from 'react-native';

export const getCardStyle = (type: string, status: string) => {
  const baseStyle = {
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  };

  if (status === 'PENDING') {
    return {
      ...baseStyle,
      borderLeftColor: '#FF9500',
      opacity: 0.8,
    };
  }

  if (status === 'FAILED') {
    return {
      ...baseStyle,
      borderLeftColor: '#FF3B30',
    };
  }

  if (type === 'CREDIT') {
    return {
      ...baseStyle,
      borderLeftColor: '#34C759',
    };
  }

  if (type === 'DEBIT') {
    return {
      ...baseStyle,
      borderLeftColor: '#FF3B30',
    };
  }

  return baseStyle;
};

export const getStatusStyle = (status: string) => ({
  color: status === 'COMPLETED'
    ? '#34C759'
    : status === 'PENDING'
      ? '#FF9500'
      : '#FF3B30',
  fontWeight: '500' as const,
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#9d9d9dff',
  },
});