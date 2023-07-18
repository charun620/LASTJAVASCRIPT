let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true, "Mars"];
let values3 = ["Mars", 9, "Apple"];

for (let index = 0; index < 2; index++) {
  const element1 = values1[index];
  for (let i = 0; i < values2.length; i++) {
    const element2 = values2[i];
    if (element1 === element2) {
      console.log("values1 has a same value2 is" + element2);
    }
  }

  for (let d = 0; d < values3.length; d++) {
    const element3 = values3[d];
    if (element1 === element3) {
      console.log(
        "values1[" + [index] + "] has a same value3[" + [d] + "] is " + element3
      );
    }
  }
}

for (let ix = 0; ix < values2.length; ix++) {
  const e2 = values2[ix];
  for (let dx = 0; dx < values3.length; dx++) {
    const e3 = values3[dx];
    if (e2 === e3) {
      console.log(
        "values2[" + [ix] + "] has a same value3[" + [dx] + "] is " + e3
      );
    }
  }
}
