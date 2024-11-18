// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Function to create a range of numbers
function range(start, end) { 
let result = []; // Initialize an empty array to hold the numbers
for (let i = start; i <= end; i++) { // Loop from start to end
    result.push(i); // Add each number to the array
} 
return result; // Return the array
}
// Example output:
console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Function to calculate the sum of an array of numbers
function sum(numbers) { 
    let total = 0; // Initialize total to zero
    for (let number of numbers) { // Loop through each number in the array
        total += number; // Add each number to the total
    } 
        return total;// Return the total sum
}
// Example output:
console.log(sum(range(1, 10))); // returns 55

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Function to create a new array with elements in reverse order
function reverseArray(array) { 
    let newArray = []; // Initialize a new empty array
    for (let i = array.length - 1; i >= 0; i--) { // Loop from end to start
        newArray.push(array[i]); // Add each element to the new array
    } 
    return newArray;// Return the new reversed array }
}
// Example output for reverseArray: 
console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// Function to reverse the array in place
function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {// Loop to the middle of the array
        let temp = array[i];// Temporary variable to hold the current element
        array[i] = array[array.length- 1 - i];// Swap element with its mirror image
        array[array.length - 1 - i] = temp;// Complete the swap
    }
}
//example output:
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // outputs [5, 4, 3, 2, 1]
 