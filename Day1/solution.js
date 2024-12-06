console.log("Current working directory:", process.cwd());

const fs = require("fs");
const path = require("path");

// Dynamically build the path to the input file
const inputPath = path.join(__dirname, "day1_input.txt");
console.log("Looking for input file at:", inputPath);

// Check if the file exists
if (!fs.existsSync(inputPath)) {
  console.error("Error: File does not exist or cannot be accessed.");
  process.exit(1); // Exit the program
}

// Read the file
const input = fs.readFileSync(inputPath, "utf8");
console.log("Successfully read input file.");
console.log("Raw input:", input);

// Step 1: Split the file contents into lines
const lines = input.trim().split("\n");
console.log("First 5 lines:", lines.slice(0, 5));

// Initialize two arrays
const list1 = [];
const list2 = [];

// Step 2: Split each line into two numbers and populate arrays
lines.forEach(line => {
  const [num1, num2] = line.split(" ").map(Number); // Convert to integers
  console.log("Parsed numbers:", num1, num2);
  list1.push(num1);
  list2.push(num2);
});

// Step 3: Sort the arrays numerically
list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);
console.log("Sorted list1:", list1);
console.log("Sorted list2:", list2);


// Step 4: Calculate absolute differences and sum them up
let totalDistance = 0;
for (let i = 0; i < list1.length; i++) {
  console.log("Parsed numbers:", num1, num2);
  totalDistance += Math.abs(list1[i] - list2[i]);
}

// Step 5: Output the result
console.log("Total Distance:", totalDistance);

