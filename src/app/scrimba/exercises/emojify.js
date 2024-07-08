const emojis = {
	smile: "😊",
	angry: "😠",
	party: "🎉",
	heart: "💜",
	cat: "🐱",
	dog: "🐕",
	LOL: "🤣",
	CowBoy: "🤠",
	horse: "🐴",
};
console.log("1) emojis", emojis);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Emojify
export function emojify(str) {
	console.log("2) str ===> ", str);
	let lowerCaseStr = str.toLowerCase();
	console.log("3) lowerCaseStr ===> ", lowerCaseStr);
	/** 			
	"toLowerCase()",
	".starstWith()",
	".slice()",
	".split()",
	"forEach()",
	".endWith()",
	"conditional", */

	if (
		lowerCaseStr.startsWith(":") &&
		lowerCaseStr.endsWith(":")
	) {
		console.log(
			"4) El Elemento empieza y termina con dos puntos"
		);
		// SPLIT(): Splitting the string into letters with the split method
		let elements = lowerCaseStr.split("");
		console.log("5) Split Str ===> ", elements);

		// FOREACH() LOOP:
		elements.forEach((element, index) => {
			console.log(
				"6) Element Loop ===> ",
				`index: ${index} ==> element: ${element}`
			);
			const letters = elements.slice(1, -1);
			console.log(
				"7) Word splited in elements ===> ",
				letters
			);

			let word = letters.join("");
			console.log("8) Word without colons ===> ", word);

			// IF CONDICIONAL:
			if (emojis.hasOwnProperty(word)) {
				console.log(
					`9) The word "${word}" is a property in the emojis object.`
				);
				// Crear una expresión regular a partir de las claves del objeto emojis
				const regex = new RegExp(
					`\\b(${Object.keys(emojis).join("|")})\\b`,
					"g"
				);

				// Reemplazar las palabras usando la expresión regular y una función de reemplazo
				word = word.replace(
					regex,
					(match) => emojis[match]
				);

				console.log("10) SOLUTION ===============> ", word); // Output: 🎉
			} else {
				console.log(
					`11) SOLUTION ===============>  The word "${word}" is not a property in the emojis object.`
				);
			}
		});
	} else {
		console.log(
			"12) SOLUTION ===============>  El Elemento NO empieza con dos puntos"
		);
	}

	return "solution";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Emojify2
export function emojify2(str) {
	console.log(
		"/////////////////////////////////////////////////////////////////////////////////////////////////////////////////"
	);
	console.log("2) str2 ===> ", str);
	let lowerCaseStr = str.toLowerCase();
	console.log("3) lowerCaseStr2 ===> ", lowerCaseStr);

	return "solution";
}
