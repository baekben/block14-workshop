// Create a JavaScript code that accepts a string of lowercase letters.
// Print the word followed by how many consonants and vowels it has.
// "a", "e", "i", "o", and "u" are considered vowels.
// Every other letter is considered a consonant.

// ex. input = "hello"
//     expected result = "hello has 3 consonants and 2 vowels"

// initialize the input value
let input = "hello";

// initialize the count variable for vowels
let vowels = 0;

// initialize the count variable for consonants
let consonants = 0;

// go through each letter in the input string
for (let i = 0; i < input.length; i++) {
	// check if the letter is vowel
	if (
		input[i] === "a" ||
		input[i] === "e" ||
		input[i] === "i" ||
		input[i] === "o" ||
		input[i] === "u"
	) {
		vowels++;
	} else {
		consonants++;
	}
}

// setting wording for singular amount
let consonantString = "consonant";
let vowelString = "vowel";

// if there are more than 1 consonant
// make it plural
if (consonants > 1) {
	consonantString = "consonants";
}

// if there are more than 1 vowel
// make it plural
if (vowels > 1) {
	vowelString = "vowels";
}

// result printing
// ex. "input" has X consonant(s) and Y vowel(s)
console.log(
	`${input} has ${consonants} ${consonantString} and ${vowels} ${vowelString}`
);
