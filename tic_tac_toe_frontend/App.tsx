import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Board from './src/components/Board';
import ScoreBoard from './src/components/ScoreBoard';
import Button from './src/components/Button';
import { calculateWinner, getAIMove } from './src/utils/gameUtils';

export default function App() {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isVsAI, setIsVsAI] = useState(false);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [gameStatus, setGameStatus] = useState<string>('');

  useEffect(() => {
    if (!xIsNext && isVsAI && !calculateWinner(squares) && squares.includes(null)) {
      const timer = setTimeout(() => {
        const aiMove = getAIMove(squares);
        handleMove(aiMove);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [xIsNext, isVsAI]);

  const handleMove = (i: number) => {
    if (calculateWinner(squares) || squares[i]) return;

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);

    const winner = calculateWinner(newSquares);
    if (winner) {
      const newScores = { ...scores };
      if (winner === 'X') newScores.player1 += 1;
      else newScores.player2 += 1;
      setScores(newScores);
      setGameStatus(`Winner: ${winner}`);
    } else if (!newSquares.includes(null)) {
      setGameStatus('Draw!');
    } else {
      setGameStatus(`Next player: ${!xIsNext ? 'X' : 'O'}`);
    }

    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStatus('Next player: X');
  };

  const toggleGameMode = () => {
    setIsVsAI(!isVsAI);
    setScores({ player1: 0, player2: 0 });
    resetGame();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <ScoreBoard scores={scores} isVsAI={isVsAI} />
        <Text style={styles.status}>{gameStatus}</Text>
        <Board squares={squares} onSquarePress={handleMove} />
        <View style={styles.controls}>
          <Button title="Reset Game" onPress={resetGame} variant="secondary" />
          <Button
            title={isVsAI ? "vs Player" : "vs AI"}
            onPress={toggleGameMode}
            variant="primary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
    color: '#2563EB',
    fontWeight: '500',
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
});
