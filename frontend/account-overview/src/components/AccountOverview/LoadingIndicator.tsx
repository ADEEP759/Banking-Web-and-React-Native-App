import React from 'react';
import { View, Text, } from 'ui-kit';
import { ActivityIndicator } from 'react-native';

const LoadingIndicator: React.FC = () => (
  <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
    <ActivityIndicator size="large" />
    <Text>Loading...</Text>
  </View>
);

export default LoadingIndicator;