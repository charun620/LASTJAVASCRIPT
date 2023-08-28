function sumobj(obj) {
    function getBudgets(people) {
  let totalBudget = 0;

  for (let person of people) {
    totalBudget += person.budget;
  }

  return totalBudget;
}

// Test cases
const people1 = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 }
];

const people2 = [
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 }
];

console.log(getBudgets(people1)); // Output: 65700
console.log(getBudgets(people2)); // Output: 62600

}
