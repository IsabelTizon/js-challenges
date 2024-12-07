export function whispering(str) {
	const whisper = "shh... ";

	if (str.endsWith("!")) {
		let lastStr = str.split(" ").pop();
		console.log("1) lastStr: ", lastStr);
		console.log("2) str: ", str);

		console.log(
			"++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
		);
		const strArray = str.split(" ");
		console.log("3) strArray: ", strArray);
		let newLastStr = strArray.pop();
		console.log("4) newLastStr: ", newLastStr);
		console.log("5) newStrArray: ", strArray);
		console.log(
			"++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
		);

		const finalStrArray =
			whisper + str.slice(0, -1).toLowerCase();

		return (
			"====================> SECOND FINAL RETURN) " +
			finalStrArray
		);
	} else {
		const shiseo = whisper + str.toLowerCase();
		return "====================> FINAL RETURN) " + shiseo;
	}
}
