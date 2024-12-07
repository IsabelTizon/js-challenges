export function flatten(arr) {
	console.log(`1) Hello Flatten array exercise!!`);
	let arrFlatten = arr.flat(Infinity);
	console.log(`2) Flatten array: ${arrFlatten}`);
	return `RETURN-1) ${arrFlatten}`;
}

export function flatten2(arr) {
	const newArr = [];

	arr.forEach((element) => {
		if (Array.isArray(element)) {
			element.forEach((item) => newArr.push(item));
		} else {
			newArr.push(element);
		}
	});
	return `RETURN-2) Hello Flatten array exercise2!!${newArr}`;
}
