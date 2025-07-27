import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type NavigationProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.tab, 
          activeTab === 'overview' && styles.activeTab
        ]}
        onPress={() => onTabChange('overview')}
      >
        <Text style={[
          styles.tabText,
          activeTab === 'overview' && styles.activeTabText
        ]}>
          Overview
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[
          styles.tab, 
          activeTab === 'transactions' && styles.activeTab
        ]}
        onPress={() => onTabChange('transactions')}
      >
        <Text style={[
          styles.tabText,
          activeTab === 'transactions' && styles.activeTabText
        ]}>
          Transactions
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default Navigation;