export function isPalindrome(str) {
	console.log(`1) Hello is a Palindrome exercise!`);
	str = str.toLowerCase();
	let newStr = str.split("").reverse().join("");
	console.log(`2: New str ${newStr}`);

	if (str !== newStr) {
		return `${str} is not a palindrome`;
	}
	return `${str} is a palindrome`;
}
