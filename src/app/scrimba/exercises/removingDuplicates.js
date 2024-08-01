export function removingDuplicates() {
	console.log(`1) Removing Duplicates characters Exercise`);

	const password =
		"9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

	// I was inisialing the variable realPassword with const
	//BUT
	//cannot reassign to a variable declared with `const`!!!!!!!

	let realPassword = "";
	password.split("").map((char) => {
		if (!realPassword.includes(char)) {
			realPassword += char;
		}
	});
	console.log(`2) passwordArray: ${realPassword}`);
	return realPassword;
}
