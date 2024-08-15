export function removeDupesArr(arr) {
	console.log(`1) Hello Remove Duplicates From Array Exercise!!!!!`);
	console.log(`2) array: ${arr}`);
	return [...new Set(arr)];
}
