// TODO: Check if the board is solved!
// p: Take a 2d array representing a 0-X board. Return a -1 for unfinished board, 0 for draw, 1 or 2 for a win
//  Explicit: Assume that the board passed in is valid. 1 is 'X', 2 is 'O'
// Implicit: a game is won if there is a diagonal 3 in a row or a vertical/horizontal 3 in a row
//
//  e: [[0, 0, 1],
//[0, 1, 2],
//[2, 1, 0]] returns -1
//  A: //Constructor function:
//     // assign each row to a rX property where X is the row index.
// Row traversal function (takes a function)
//   checks if a set of indices have all 1/2
function isSolved(board) {
  let game = new Board(board);
  switch (true) {
    case game.hasNotFinished():
      return -1;
    case game.hasMatch():
      return +game.winner;
    default:
      return 0;
  }
}

class Board {
  constructor(arrays) {
    this.boardRows = arrays;
    this.boardRows.forEach((row, index) => {
      this[`r${index}`] = row;
    });
    this.checkWinner();
  }

  assignWinner(marker) {
    this.winner = marker;
  }

  canCallWinner(...cells) {
    const cellString = cells.join``;
    const matchResult = cellString.match(/(111|222)/);
    if (matchResult) this.assignWinner(matchResult[0][0]);
    return this.hasMatch();
  }

  horizontalMatch() {
    return this.boardRows.some((row, i) =>
      this.canCallWinner(...row)
    );
  }

  verticalMatch() {
    return (
      this.canCallWinner(this.r0[0], this.r1[0], this.r2[0]) ||
      this.canCallWinner(this.r0[1], this.r1[1], this.r2[1]) ||
      this.canCallWinner(this.r0[2], this.r1[2], this.r2[2])
    );
  }

  diagonalMatch() {
    return (
      this.canCallWinner(this.r0[0], this.r1[1], this.r2[2]) ||
      this.canCallWinner(this.r0[2], this.r1[1], this.r2[0])
    );
  }

  hasFullBoard() {
    return this.boardRows.every(
      row => row.join``.replace("0", "").length === 3
    );
  }

  hasNotFinished() {
    return this.hasFullBoard() ? false : !this.hasMatch();
  }

  checkWinner() {
    this.horizontalMatch() || this.verticalMatch() || this.diagonalMatch();
  }

  hasMatch() {
    return !!this.winner;
  }
}
console.log( isSolved([[2, 1, 2],[2, 1, 1],[1, 2, 2]]));