import { images } from "../../utils";

export const fillLoteriaWithCardSlots = () => {
  const dimension = 5;
  const loteria = Array(dimension).fill(false);

  for (let i = 0; i < dimension; i++) {
    loteria[i] = Array(dimension).fill(false);
  }

  loteria[2][2] = true;

  return loteria;
};

export const getRandomizedImages = () => {
  let tempImages = images.slice();
  const dimension = 25;
  const content = [];
  let counter = 0;

  while (counter < dimension) {
    const random = Math.floor(Math.random() * tempImages.length);
    content.push(tempImages[random]);
    tempImages.splice(random, 1);
    counter++;
  }

  return content;
};

const verifyRow = (row, board) => {
  for (let col = 0, len = board.length; col < len; col++) {
    if (board[row][col] === false) {
      return false;
    }
  }

  return true;
};

const verifyColumn = (col, board) => {
  for (let row = 0, len = board.length; row < len; row++) {
    if (board[row][col] === false) {
      return false;
    }
  }

  return true;
};

const verifyDiagonal = (board) => {
  for (let diag = 0, len = board.length; diag < len; diag++) {
    if (board[diag][diag] === false) {
      return false;
    }
  }

  return true;
};

const verifyInvertedDiagonal = (board) => {
  let col = board.length - 1;
  let row = 0;
  for (let pos = 0, len = board.length; pos < len; pos++) {
    if (board[row++][col--] === false) {
      return false;
    }
  }

  return true;
};

export const isWinner = (row, col, board) => {
  const isInvertedDiagonal = row + col === board.length - 1;
  if (
    verifyRow(row, board) ||
    verifyColumn(col, board) ||
    (row === col && verifyDiagonal(board)) ||
    (isInvertedDiagonal && verifyInvertedDiagonal(board))
  ) {
    return true;
  }

  return false;
};
