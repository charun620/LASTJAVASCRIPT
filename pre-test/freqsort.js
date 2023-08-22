function frequencySort(str) {
	let map = {}
   for (const letter of str) {
      map[letter] = (map[letter] || 0) + 1;
   };
   let res = "";
   let sorted = Object.keys(map).sort((a, b) => map[b] - map[a])
   for (let letter of sorted) {
      for (let count = 0; count < map[letter]; count++) {
         res += letter
      }
   }
   return res;
}