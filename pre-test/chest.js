function canMove(piece, startSquare, endSquare) {
// แปลงตำแหน่งจากตัวอักษรที่เลือกเป็นRow and Collumn
  const startRank = parseInt(startSquare[1]);
  const startFile = startSquare.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  const endRank = parseInt(endSquare[1]);
  const endFile = endSquare.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

  // คำนวณความแตกต่างของRow and Collumn
  const rankDifference = Math.abs(startRank - endRank);
  const fileDifference = Math.abs(startFile - endFile);

  // ตรวจสอบการเคลื่อนที่ของหมากแต่ละประเภท
  switch (piece.toLowerCase()) {
    case 'pawn':
      // พิมพ์เคลื่อนที่ของ Pawn
      return (
        (startFile === endFile && rankDifference === 1) ||
        (startFile === endFile && startRank === 2 && rankDifference === 2)
      );
    case 'rook':
      // พิมพ์เคลื่อนที่ของ Rook
      return startRank === endRank || startFile === endFile;
    case 'knight':
      // พิมพ์เคลื่อนที่ของ Knight
      return (rankDifference === 2 && fileDifference === 1) || (rankDifference === 1 && fileDifference === 2);
    case 'bishop':
      // พิมพ์เคลื่อนที่ของ Bishop
      return rankDifference === fileDifference;
    case 'queen':
      // พิมพ์เคลื่อนที่ของ Queen
      return startRank === endRank || startFile === endFile || rankDifference === fileDifference;
    case 'king':
      // พิมพ์เคลื่อนที่ของ King
      return rankDifference <= 1 && fileDifference <= 1;
    default:
      return false; // กระดานหมากรุกไม่ถูกต้อง
  }
}

console.log(canMove("pawn", "E2", "E4"));    // ผลลัพธ์: true
console.log(canMove("rook", "A1", "A8"));   // ผลลัพธ์: true
console.log(canMove("knight", "B1", "C3")); // ผลลัพธ์: true
console.log(canMove("bishop", "F1", "B5")); // ผลลัพธ์: true
console.log(canMove("queen", "D1", "D4"));  // ผลลัพธ์: true
console.log(canMove("king", "E1", "E2"));   // ผลลัพธ์: true
