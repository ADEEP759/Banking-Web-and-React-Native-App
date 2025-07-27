import React from 'react';
import { View, Text, ViewStyle, StyleProp } from 'react-native';

interface CardProps {
  title: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Card({ title, children, style }: CardProps) {
  return (
    <View
      style={[
        {
          padding: 10,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        },
        style,
      ]}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
      {children}
    </View>
  );
}

export default Card;
