// With a for loop, create a JavaScript code that creates a new array in reverse order.

// initialize array to reverse
let array = [1, 3, 5, 7, 9, 11];

// intialzie output array that will
// hold the reversed array
let reversedArr = [];

// go through each value in the array
for (let i = 0; i < array.length; i++) {
	// take each value in array and add it to the front
	// of reversedArr
	reversedArr.unshift(array[i]);
}

console.log("Reversed array = ", reversedArr);
