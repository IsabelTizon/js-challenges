export function reverseStr(str) {
	return str.split("").reverse().join("");
}

export function reverseStrArray(arr) {
	console.log(
		arr.map((str) => str.split("").reverse().join(""))
	);
}
