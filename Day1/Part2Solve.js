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
lines.forEach((line) => {
  console.log("Line being parsed (raw):", JSON.stringify(line)); // Show raw line with spaces

  const nums = line.trim().split(/\s+/).map(Number); // Handles tabs or multiple spaces
  if (nums.length !== 2 || isNaN(nums[0]) || isNaN(nums[1])) {
    console.error("Invalid line or numbers:", line);
    return;
  }

  const [num1, num2] = nums;
  console.log("Parsed numbers:", num1, num2);
  list1.push(num1);
  list2.push(num2);
});

// Function to calculate occurrences and products
function multiplyOccurrences(arr1, arr2) {
  const newArray = []; // Store the results

  // Loop through each number in arr1
  for (let i = 0; i < arr1.length; i++) {
    const number = arr1[i]; // Current number from arr1
    let count = 0; // Counter for occurrences in arr2

    // Count occurrences in arr2
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === number) {
        count++; // Increment count for every match
      }
    }

    // Debug: Log the number and its count
    console.log(`Number: ${number}, Count: ${count}`);

    // If count > 0, calculate the product and push to newArray
    if (count > 0) {
      const product = number * count;
      newArray.push(product);

      // Debug: Log the product
      console.log(`Pushed to newArray: ${product}`);
    }
  }

  // Debug: Final newArray
  console.log("Final newArray:", newArray);
  return newArray;
}

// Use `list1` and `list2` as input arrays
const result = multiplyOccurrences(list1, list2);
console.log("Result:", result);

// Final Total
const finalTotal = result.reduce((sum, num) => sum + num, 0);
console.log("Final Total:", finalTotal);

// Step 3: Sort the arrays numerically
list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);
//console.log("Final list1 length:", list1.length);
//console.log("Final list2 length:", list2.length);
//console.log("Sample list1:", list1.slice(0, 5));
//console.log("Sample list2:", list2.slice(0, 5));

