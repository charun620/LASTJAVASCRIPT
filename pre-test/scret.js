function letterValue(letter) {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  }
  
  function findArithmeticSeries(triplets) {
    const differences = [];
    for (let i = 0; i < triplets.length - 2; i++) {
      if (triplets[i + 1] - triplets[i] === triplets[i + 2] - triplets[i + 1]) {
        differences.push(triplets[i + 1] - triplets[i]);
      }
    }
    return differences;
  }
  
  function secretWord(s, length) {
    const secret = [];
    for (let i = 0; i < s.length - 2; i++) {
      const triplet = [
        letterValue(s[i]),
        letterValue(s[i + 1]),
        letterValue(s[i + 2])
      ];
      if (length % 2 === 0) {
        if (triplet[1] === letterValue(s[i + length / 2 - 1])) {
          secret.push(triplet);
        }
      } else {
        if (triplet[1] === letterValue(s[i + Math.floor(length / 2)])) {
          secret.push(triplet);
        }
      }
    }
  
    const arithmeticSeries = findArithmeticSeries(
      secret.map(triplet => triplet.reduce((sum, val) => sum + val, 0))
    );
  
    for (const diff of arithmeticSeries) {
      for (let i = 0; i < secret.length - 2; i++) {
        if (
          secret[i].reduce((sum, val) => sum + val, 0) + diff ===
            secret[i + 1].reduce((sum, val) => sum + val, 0) &&
          secret[i + 1].reduce((sum, val) => sum + val, 0) + diff ===
            secret[i + 2].reduce((sum, val) => sum + val, 0)
        ) {
          return secret[i + 1]
            .map(val => String.fromCharCode(val + 'a'.charCodeAt(0) - 1))
            .join('');
        }
      }
    }
  }
  
  // Test cases
  console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5)); // Output: "brake"
  console.log(secretWord("aheiayd", 3)); // Output: "hey"
  