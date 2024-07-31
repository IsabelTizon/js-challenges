//Reverse is an array method and you can not using on a str. What I first need to do is pass my str to an array with the split() method
export function reverseStr(str) {
	return str.split("").reverse().join("");
}

export function reverseStrArray(arr) {
	return arr.map((str) => str.split("").reverse().join(""));
}
