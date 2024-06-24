export function alternatingCaps(str) {
	const altCapsArray = str.toLowerCase().split("");
	console.log(altCapsArray);

	for (let i = 0; i < altCapsArray.length; i++) {
		if (i % 2 === 0) {
			console.log("===> par -", altCapsArray[i]);

			altCapsArray[i] = altCapsArray[i].toUpperCase();
			console.log(
				"===> Even (par) Capitalised -",
				altCapsArray[i].toUpperCase()
			);
		} else {
			console.log("===> Odd (impar)", altCapsArray[i]);
		}
		console.log("final: ", altCapsArray.join(""));
	}
	return altCapsArray.join("");
}
