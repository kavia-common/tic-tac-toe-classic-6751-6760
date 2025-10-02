import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SquareProps {
  value: string | null;
  onPress: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={[
        styles.text,
        { color: value === 'X' ? '#2563EB' : '#F59E0B' }
      ]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    margin: 4,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Square;
