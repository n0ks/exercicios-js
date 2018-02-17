// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
	// let strArr = str.split('').reverse().join('');
	// return strArr;

	////////////////////////////////////////
	// let revString = '';
	// for (let index = str.length - 1; index >= 0; index--) {
	// 	revString = revString + str[index];
	// }
	// return revString;
	////////////////////////////////////////

	////////////////////////////////////////
	// let revString = '';
	// for (let char of str) {
	// 	revString = char + revString;
	// }
	// return revString;
	////////////////////////////////////////

	////////////////////////////////////////
	// let revString = '';
	// str.split('').forEach(function (char) {
	// 	revString = char + revString;
	// });
	// return revString;
	////////////////////////////////////////

	return str.split('').reduce(function (revString, char) {
		return char + revString;
	}, '')

}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
	let revString = str.split('').reverse().join('');
	return revString === str;

}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
	const revInt = int.toString().split('').reverse().join('');
	return parseInt(revInt) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

	////////////////////////////////////////
	// const strArr = str.toLowerCase().split(' ');
	// for (let i = 0; i < strArr.length; i++) {
	// 	strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
	// }
	// return strArr.join(' ');
	////////////////////////////////////////

	////////////////////////////////////////
	// return str
	// 	.toLowerCase()
	// 	.split(' ')
	// 	.map(function (word) {
	// 		console.log(word);
	// 		return word[0].toUpperCase() + word.substr(1);
	// 	}).join(' ');
	////////////////////////////////////////

	return str.replace(/\b[a-z]/gi, function (char) {
		return char.toUpperCase();
	});

}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
	let charMap = {};
	let maxNum = 0;
	let maxChar = '';

	str.split('').forEach(function (char) {
		if (charMap[char]) {
			charMap[char]++
		} else {
			charMap[char] = 1
		}
	});

	for (let char in charMap) {
		console.log(char);
		if (charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxChar = char;
		}
	}

	return '\n\nMAX: ' + maxChar;

}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 15 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');

		} else {
			console.log(i);
		}
	}
}


// Call Function
const output = fizzBuzz();

// console.log(output);