export function removeDupesArr(arr) {
	console.log(`1.1) Hello Remove Duplicates From Array Exercise!!!!!`);
	console.log(`1.2) array: ${arr}`);
	return [...new Set(arr)];
}
export function removeDupesArr2(arr) {
	console.log(`2.1) Hello Remove Duplicates From Array 2 Exercise!!!!!`);
	return arr.filter(
		(item, index) =>
			// console.log(`2.2) item: ${item}, index: ${index}`)
			// console.log(`4) item: ${arr.indexOf(item)}`)
			/*
			2.2) item: 0 ===> 🥓 bacon
			2.2) item: 0
			2.2) item: 2 ===> 🍳 eggs
			2.2) item: 3 ===> 🫑 green peppers
			2.2) item: 4 ===> 🧀 cheese
			2.2) item: 5 ===> 🌶️ hot sauce
			2.2) item: 0
			2.2) item: 7 ===> 🥦 broccoli
			2.2) item: 4
			2.2) item: 7
			2.2) item: 5
*/
			arr.indexOf(item) === index
	);
}
export function removeDupesArr3(arr) {
	console.log(`3.1) Hello Remove Duplicates From Array 3 Exercise!!!!!`);

}
