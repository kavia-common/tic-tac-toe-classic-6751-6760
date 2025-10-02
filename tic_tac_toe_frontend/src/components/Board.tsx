import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Square from './Square';

interface BoardProps {
  squares: (string | null)[];
  onSquarePress: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onSquarePress }) => {
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onPress={() => onSquarePress(i)} />
  );

  return (
    <View style={styles.board}>
      <View style={styles.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    width: Dimensions.get('window').width * 0.9,
    maxWidth: 400,
    aspectRatio: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Board;
