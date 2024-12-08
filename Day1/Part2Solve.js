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

// Step 1: Parse the input data into two arrays
const [list1, list2] = input
  .trim()
  .split("\n")
  .reduce(
    (acc, line) => {
      const nums = line.trim().split(/\s+/).map(Number); // Handles spaces/tabs
      if (nums.length === 2) {
        acc[0].push(nums[0]); // Add to list1
        acc[1].push(nums[1]); // Add to list2
      }
      return acc;
    },
    [[], []] // Initialize two empty arrays
  );

console.log("Parsed list1:", list1.slice(0, 5), "...");
console.log("Parsed list2:", list2.slice(0, 5), "...");

// Step 2: Build a frequency map for list2
const frequencyMap = list2.reduce((map, num) => {
  map[num] = (map[num] || 0) + 1;
  return map;
}, {});
console.log("Frequency map:", frequencyMap);

// Step 3: Multiply occurrences and calculate results
const result = list1.reduce((acc, num) => {
  const count = frequencyMap[num] || 0; // Get the count from the map
  if (count > 0) {
    acc.push(num * count); // Multiply and store in the results array
  }
  return acc;
}, []);

console.log("Intermediate Results:", result);

// Step 4: Calculate the total sum
const finalTotal = result.reduce((sum, num) => sum + num, 0);
console.log("Final Total:", finalTotal);
