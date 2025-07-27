import React from 'react';
import { View, Text } from 'ui-kit';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
 // Assuming you're using Expo, or use another icon library

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightAction?: {
    icon: string;
    onPress: () => void;
  };
};

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = false, 
  onBackPress = () => {},
  rightAction 
}) => (
  <View style={styles.container}>
    <View style={styles.leftContainer}>
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          {/* <Ionicons name="arrow-back" size={24} color="#fff" /> */}
        </TouchableOpacity>
      )}
    </View>
    
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    
    <View style={styles.rightContainer}>
      {rightAction && (
        <TouchableOpacity onPress={rightAction.onPress} style={styles.actionButton}>
          {/* <Ionicons name={rightAction.icon} size={24} color="#fff" /> */}
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#2A4D8F', // Professional blue shade
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  leftContainer: {
    width: 40,
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 4,
  },
  actionButton: {
    padding: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 0.5,
  },
});

export default Header;