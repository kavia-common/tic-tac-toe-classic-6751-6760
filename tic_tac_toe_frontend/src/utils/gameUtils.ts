export const calculateWinner = (squares: (string | null)[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const getAIMove = (squares: (string | null)[]): number => {
  // First, look for winning move
  const aiMoves = findPotentialMove(squares, 'O');
  if (aiMoves !== -1) return aiMoves;

  // Then, block player's winning move
  const playerMoves = findPotentialMove(squares, 'X');
  if (playerMoves !== -1) return playerMoves;

  // Take center if available
  if (squares[4] === null) return 4;

  // Take any corner
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter(i => squares[i] === null);
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  // Take any available space
  const availableMoves = squares
    .map((square, index) => square === null ? index : -1)
    .filter(index => index !== -1);
  
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};

const findPotentialMove = (squares: (string | null)[], player: string): number => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    const squares_array = [squares[a], squares[b], squares[c]];
    if (squares_array.filter(square => square === player).length === 2 &&
        squares_array.filter(square => square === null).length === 1) {
      return [a, b, c][squares_array.indexOf(null)];
    }
  }
  return -1;
};
