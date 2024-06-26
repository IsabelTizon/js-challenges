export function toTitleCase(str) {
	let elements = str.split(" ");
	// console.log("ELEMENTS: ", elements);

	elements.forEach((element, index) => {
		// console.log(`index: ${index} ==> element: ${element}`);
		// console.log(`FIRST ELEMENT: ${element.charAt(0)}`);
		// console.log(
		// 	`REST OF THE ELEMENTS: ${element.slice(1)}`
		// );
		elements[index] =
			element.charAt(0).toUpperCase() +
			element.slice(1).toLowerCase();

		console.log(`ELEMENTS ${elements}`);
	});
	console.log(
		`FINAL SENTENCE =====> ${elements.join(" ")}`
	);
	// return elements.join(" ");
}
