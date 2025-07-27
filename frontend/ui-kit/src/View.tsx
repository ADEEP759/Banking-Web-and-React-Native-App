import React from 'react';
import { View, ViewStyle, StyleProp, StyleSheet } from 'react-native';

export interface ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  accessibilityLabel?: string;
  onLayout?: () => void;
  pointerEvents?: 'auto' | 'none' | 'box-none' | 'box-only';
}

function ViewComponent({
  children,
  style,
  testID,
  accessibilityLabel,
  onLayout,
  pointerEvents = 'auto',
}: ViewProps) {
  // Flatten the style to ensure we can access properties directly
  const flattenedStyle = StyleSheet.flatten(style) as ViewStyle;

  return (
    <View
      style={{
        flexDirection: flattenedStyle.flexDirection,
        alignItems: flattenedStyle.alignItems,
        justifyContent: flattenedStyle.justifyContent,
        flex: flattenedStyle.flex,
        flexWrap: flattenedStyle.flexWrap,
        width: flattenedStyle.width,
        height: flattenedStyle.height,
        margin: flattenedStyle.margin,
        marginTop: flattenedStyle.marginTop,
        marginBottom: flattenedStyle.marginBottom,
        marginLeft: flattenedStyle.marginLeft,
        marginRight: flattenedStyle.marginRight,
        marginVertical: flattenedStyle.marginVertical,
        marginHorizontal: flattenedStyle.marginHorizontal,
        padding: flattenedStyle.padding,
        paddingTop: flattenedStyle.paddingTop,
        paddingBottom: flattenedStyle.paddingBottom,
        paddingLeft: flattenedStyle.paddingLeft,
        paddingRight: flattenedStyle.paddingRight,
        paddingVertical: flattenedStyle.paddingVertical,
        paddingHorizontal: flattenedStyle.paddingHorizontal,
        borderWidth: flattenedStyle.borderWidth,
        borderRadius: flattenedStyle.borderRadius,
        backgroundColor: flattenedStyle.backgroundColor,
        opacity: flattenedStyle.opacity,
        overflow: flattenedStyle.overflow,
        position: flattenedStyle.position,
        top: flattenedStyle.top,
        bottom: flattenedStyle.bottom,
        left: flattenedStyle.left,
        right: flattenedStyle.right,
        zIndex: flattenedStyle.zIndex,
        transform: flattenedStyle.transform,
      }}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      onLayout={onLayout}
      pointerEvents={pointerEvents}
    >
      {children}
    </View>
  );
}

export default ViewComponent;
