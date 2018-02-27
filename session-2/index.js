// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
	// SOLUTION 1 - Return a single longest word
	let words = sen.toLowerCase().match(/[a-z0-9]+/g);
	console.log(words);

	// SOLUTION 2 - Return an array and include multiple words if they have the same length
	let sorted = words.sort(function (a, b) {
		return b.length - a.length;
	});

	let longestWord = sorted.filter(function (word) {
		return word.length === sorted[0].length;
	});

	// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
	if (longestWord.length === 1) {
		return longestWord[0];
	} else {
		return longestWord;
	}

}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
	//Solution 1
	// let chunkArr = [];
	// let i = 0;

	// while (i < arr.length) {
	// 	chunkArr.push(arr.slice(i, i + len));
	// 	i += len;
	// }
	// solution 2

	let chunkArr = [];
	arr.forEach(function (val) {
		// Get last element
		let last = chunkArr[chunkArr.length - 1];
		if (!last || last.length === len) {
			chunkArr.push([val]);
		} else {
			last.push(val);
		}
		return chunkArr;
	});

}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
	//Solution 1 
	// return arrays.reduce(function (a, b) {
	// 	return a.concat(b);
	// });
	//Solution 2
	return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
	return formatString(str1) === formatString(str2);
}

function formatString(str) {
	return str
		.replace(/[^\w]/g, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('')
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
	let newStr = str.toLowerCase().replace(/[a-z]/gi, function (char) {
		if (char === 'z' || char === 'Z') {
			return 'a';
		} else {
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	})

	newStr = newStr.replace(/a|e|i|o|u/gi, function (vowel) {
		return vowel.toUpperCase();;
	})
	return newStr;

}

// Call Function
const output = letterChanges('kamehameha');

console.log(output);