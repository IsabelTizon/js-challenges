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
	// SPLIT(): Splitting the string into letters with the split method
	let elementsArray = lowerCaseStr.split("");
	console.log(
		"5) elements Array split() ===> ",
		elementsArray
	);

	// FOREACH() LOOP:
	elementsArray.forEach((element, index) => {
		console.log(
			"6) Element Loop ===> ",
			`index: ${index} ==> element: ${element}`
		);
		if (element.startsWith(":") && element.endsWith(":")) {
			console.log(
				"4) El Elemento empieza y termina con dos puntos"
			);
			const letters = elementsArray.slice(1, -1);
			console.log(
				"7) elements Array with split() ===> ",
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
		} else {
			console.log(
				"12) SOLUTION ===============>  El Elemento NO empieza con dos puntos"
			);
		}
	});

	return "solution";
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Emojify2
export function emojify2(str) {
	console.log(
		"/////////////////////////////////////////////////////////////////////////////////////////////////////////////////"
	);
	console.log("1) str2 ===> ", str);
	let lowerCaseStr = str.toLowerCase();
	console.log("2) lowerCaseStr2 ===> ", lowerCaseStr);

	let elements = lowerCaseStr.split(" ");
	console.log("3) elements", elements);

	elements.forEach((element, index) => {
		console.log(`4) index: ${index}=> element: ${element}`);
		if (element.startsWith(":") && element.endsWith(":")) {
			const slicedElement = element.slice(1, -1);
			elements[index] = slicedElement;
			console.log("5) sliced element: ", slicedElement);

			if (emojis.hasOwnProperty(slicedElement)) {
				console.log(
					`6) The word "${slicedElement}" is a property in the emojis object.`
				); // Crear una expresión regular a partir de las claves del objeto emojis
				const regex = new RegExp(
					`\\b(${Object.keys(emojis).join("|")})\\b`,
					"g"
				);

				// Reemplazar las palabras usando la expresión regular y una función de reemplazo
				const newElement = slicedElement.replace(
					regex,
					(match) => emojis[match]
				);
				console.log("7) newElement", newElement);
				elements[index] = newElement;

				console.log("8) elements", elements);
				// Output: i 💜 my 🐱
			}
		}
	});
	return elements.join(" ");
}
