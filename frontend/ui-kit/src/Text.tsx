import React from 'react';
import { Text as RNText, TextStyle, StyleProp } from 'react-native';

export interface TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  testID?: string;
  accessibilityLabel?: string;
}

function Text({ children, style, testID, accessibilityLabel }: TextProps) {
  return (
    <RNText
      style={style}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </RNText>
  );
}

export default Text;
