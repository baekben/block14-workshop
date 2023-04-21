// Create a JavaScript code that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// intitialize starting value, 1
let count = 1;

// while the count is not 100
// keep adding 1 to count to go through
// each number from 1 to 100
while (count !== 101) {
	// check if the count number is a multiple of 3 and 5
	if (count % 3 == 0 && count % 5 == 0) {
		// print FizzBuzz if true
		console.log("FizzBuzz");

		// if first condition is not true
		// check if count is a multiple of 3
	} else if (count % 3 == 0) {
		// if true, print "Fizz"
		console.log("Fizz");

		// if the condition is not true
		// check if the count is a multiple of 5
	} else if (count % 5 == 0) {
		// if true, print "Buzz"
		console.log("Buzz");

		// if the condition is not true
		// print the count value
	} else {
		console.log(count);
	}

	// add 1 to the count to go to the next number
	count++;
}
