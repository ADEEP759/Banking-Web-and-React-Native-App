import React from 'react';
import { View } from 'react-native';
import AccountOverview from './components/AccountOverview/AccountOverview';
import { AccountOverviewProps } from './types';

const App = (props: AccountOverviewProps) => {
  return (
    <View style={{ flex: 1 }}>
      <AccountOverview {...props} />
    </View>
  );
};

export default App;