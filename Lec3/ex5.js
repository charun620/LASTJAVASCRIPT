function CountposMisum(arr) {
  let pos = 0;
  let mis = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] >= 0) {
      pos++;
    }
    if (arr[index] < 0) {
      mis = mis + arr[index];
    }
  }
  return [pos, mis];
}
console.log(
  CountposMisum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
);
