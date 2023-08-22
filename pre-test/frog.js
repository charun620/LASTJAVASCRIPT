function jumpingFrog(n, stones) {
    const dp = new Array(n).fill(Infinity);
    dp[0] = 1; // The frog starts at stone 1
  
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (i - j <= stones[j]) {
          dp[i] = Math.min(dp[i], dp[j] + 1);
        }
      }
    }
  
    if (dp[n - 1] === Infinity) {
      return "no chance :-(";
    } else {
      return dp[n - 1] + n; // Add n to include the last jump to the far bank
    }
  }
  
  // Test cases
  console.log(jumpingFrog(5, [1, 1, 1, 1, 1])); // Output: 6
  console.log(jumpingFrog(5, [1, 3, 1, 1, 1])); // Output: 4
  console.log(jumpingFrog(5, [1, 1, 0, 1, 1])); // Output: "no chance :-("
  