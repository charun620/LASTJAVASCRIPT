let furniture = ["Table", "Chairs", "Couch"];

for (let index = 0; index < furniture.length; index++) {
  const fni = furniture[index];
  console.log(fni);

  for (const index of fni) {
    console.log(index);
  }
  console.log("------");
}
