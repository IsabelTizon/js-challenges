export function countChar(str) {
	console.log(`1) Hello countChar exercise!!!!`);
	console.log(str.split(""));

	return str.split("").reduce((counts, char) => {
		counts[char] = (counts[char] || 0) + 1;

		return counts;
	}, {});
}
