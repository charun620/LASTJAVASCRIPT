function canMove(piece, startSquare, endSquare) {
  const startFile = startSquare.charCodeAt(0) - 'A'.charCodeAt(0);
  const startRank = parseInt(startSquare[1]);
  const endFile = endSquare.charCodeAt(0) - 'A'.charCodeAt(0);
  const endRank = parseInt(endSquare[1]);

  const fileDifference = Math.abs(startFile - endFile);
  const rankDifference = Math.abs(startRank - endRank);

  switch (piece.toLowerCase()) {
    case 'pawn':
      return (startRank === 2 && rankDifference <= 2) || (rankDifference === 1) && (fileDifference <= 1);
    case 'rook':
      return startRank === endRank || startFile === endFile;
    case 'knight':
      return (fileDifference === 1 && rankDifference === 2) || (fileDifference === 2 && rankDifference === 1);
    case 'bishop':
      return fileDifference === rankDifference;
    case 'queen':
      return startRank === endRank || startFile === endFile || fileDifference === rankDifference;
    case 'king':
      return fileDifference <= 1 && rankDifference <= 1;
    default:
      return false; // Invalid piece name
  }
}


 console.log(canMove("rook", "A8", "H8"));
 console.log(canMove("bishop", "A7", "G1"));
 console.log(canMove("Queen", "C4", "D6"));