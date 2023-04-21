// script that accepts array of numbers and returns a new array
// with only the odd numbers of the array

// if there is only one odd number
// return an array with the single value

// input array
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// initialize index for output array index
let index = 0;

// initalize output array
let output = [];

// go through each value in the array
for (let i = 0; i < input.length; i++) {
	// check if the value is odd
	if (input[i] % 2 !== 0) {
		// add the odd value to the output array
		output.push(input[i]);
	}
}

// result will only contain odd values in the array
console.log("Results", output);
