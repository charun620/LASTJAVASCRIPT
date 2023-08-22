// function totalvolume(...arr) {
//   let sum = 1;
//   for (const item of arr) {
//     let x = 1;
//     for (const num of item) {
//       x *= num;
//     }
//     sum *= x;
//   }
//   return console.log(sum);
// }
function totalvolume(...arr) {
    let sum = 1;
    for (const item of arr) {
      let product = 1; // Initialize product for each sub-array
      for (const num of item) {
        product *= num;
        console.log(product);
      }
      sum = product;
    }
    return sum;
  }

console.log(totalvolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 2, 1]));
totalvolume([2, 2, 2], [2, 1, 1]);
totalvolume([1, 1, 1]);
