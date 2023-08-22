function removedups(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element1 = arr[index];
    for (let i = 0; i < 5; i++) {
      console.log(arr[i]);
      if (element1 === arr[i]) {
        console.log(element1.split(arr[i]));
      }
    }
  }
}
