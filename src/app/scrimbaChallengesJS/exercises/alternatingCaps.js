// function  with for loop
// export function alternatingCaps(str) {
// 	const altCapsArray = str.toLowerCase().split("");
// 	console.log(altCapsArray);

// 	for (let i = 0; i < altCapsArray.length; i++) {
// 		if (i % 2 === 0) {
// 			console.log("===> par -", altCapsArray[i]);

// 			altCapsArray[i] = altCapsArray[i].toUpperCase();
// 			console.log(
// 				"===> Even (par) Capitalised -",
// 				altCapsArray[i].toUpperCase()
// 			);
// 		} else {
// 			console.log("===> Odd (impar)", altCapsArray[i]);
// 		}
// 		console.log("final: ", altCapsArray.join(""));
// 	}
// 	return altCapsArray.join("");
// }

// function  with forEach
// En JavaScript, el método .forEach() es utilizado para ejecutar una función sobre cada elemento de un array. Este método es útil para realizar operaciones sobre los elementos de un array sin la necesidad de utilizar un bucle for tradicional.

export function alternatingCaps(str) {
	console.log("str: ", str);
	console.log("lowerCaseStr: ", str.toLowerCase());
	console.log(
		"lettersArray: ",
		str.toLowerCase().split("")
	);
	let lettersArray = str.toLowerCase().split("");

	lettersArray.forEach((element, index) => {
		if (index % 2 === 0) {
			console.log(`===> even element ${index}: ${element}`);
			console.log(
				`===> even element Upper case ${element.toUpperCase()}`
			);
			lettersArray[index] = element.toUpperCase();
			console.log("new array", lettersArray);
		}
	});
	return "newArray", lettersArray.join(" ");
}
