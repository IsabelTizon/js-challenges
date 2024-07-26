export function isAnagram(str1, str2) {
	// Primero de todo ver si tienen la misma longitud
	if (str1.length == str2.length) {
		console.log(
			`2) str1 (${str1}) and str2 (${str2}) have the same length`
		);
		//  💡💡💡💡💡💡💡💡 Es muy importante utilizar el método .split() para poder utilizar el método .sort()
		// Minusculas con el metodo toLowerCase()
		// Convertirlo a array con el método .split() para comparar elemento por elemento
		// Ordenarlo alfabeticamente con el método .sort()
		// Volver a juntar la cadena del array en str con el método .join("")
		let newStr1 = str1
			.toLowerCase()
			.split("")
			.sort()
			.join("");
		let newStr2 = str2
			.toLowerCase()
			.split("")
			.sort()
			.join("");

		console.log(
			`1) lower str1: ${newStr1} lower str2: ${newStr2}`
		);

		if (newStr1 === newStr1) {
			return `RETURN =============================> ${str1} is an anagram of ${str2}`;
		}
	}
}
