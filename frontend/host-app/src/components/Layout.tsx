import React from 'react';
import { View } from 'ui-kit';
import { StyleSheet } from 'react-native';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Layout;
