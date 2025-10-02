import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ScoreBoardProps {
  scores: {
    player1: number;
    player2: number;
  };
  isVsAI: boolean;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores, isVsAI }) => {
  return (
    <View style={styles.scoreBoard}>
      <View style={styles.scoreContainer}>
        <Text style={styles.playerName}>Player X</Text>
        <Text style={[styles.score, { color: '#2563EB' }]}>{scores.player1}</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.playerName}>{isVsAI ? 'AI' : 'Player O'}</Text>
        <Text style={[styles.score, { color: '#F59E0B' }]}>{scores.player2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreBoard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 20,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  playerName: {
    fontSize: 18,
    color: '#111827',
    marginBottom: 5,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ScoreBoard;
