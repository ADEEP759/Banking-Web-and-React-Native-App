import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const Button = ({ title, onPress, style }: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, style]}
    activeOpacity={0.7}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
