export function isAnagram(str1, str2) {
	// Minusculas con el metodo toLowerCase()
	const lowerstr1 = str1.toLowerCase();
	const lowerstr2 = str2.toLowerCase();
	console.log(`1) str1: ${lowerstr1} str2: ${lowerstr2}`);

	// Primero de todo ver si tienen la misma longitud
	if (lowerstr1.length == lowerstr2.length) {
		console.log(
			`2) str1 (${lowerstr1}) and str2 (${lowerstr2}) have the same length`
		);
	}
	return `RETURN =============================>  ${lowerstr1} and ${lowerstr2}`;
}
