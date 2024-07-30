export function reverseStr(str) {
	return str.split("").reverse().join("");
}

export function reverseStrArray(arr) {
	return arr.map((str) => str.split("").reverse().join(""));
}
