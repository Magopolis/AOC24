console.log(process.cwd());

const fs = require("fs");

// Step 1: Read the file and split into two arrays
const input = fs.readFileSync("day1_input.txt", "utf8"); // Replace 'input.txt' with your file name
const lines = input.trim().split("\n");

const list1 = [];
const list2 = [];

// Step 2: Split each line into two numbers and populate arrays
lines.forEach(line => {
  const [num1, num2] = line.split(" ").map(Number); // Convert to integers
  list1.push(num1);
  list2.push(num2);
});

// Step 3: Sort the two arrays numerically
list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

// Step 4: Calculate absolute differences and sum them up
let totalDistance = 0;
for (let i = 0; i < list1.length; i++) {
  totalDistance += Math.abs(list1[i] - list2[i]);
}

// Step 5: Output the result
console.log("Total Distance:", totalDistance,"L28");
