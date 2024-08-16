export function removeDupesArr(arr) {
	console.log(`1) Hello Remove Duplicates From Array Exercise!!!!!`);
	console.log(`2) array: ${arr}`);
	return [...new Set(arr)];
}
export function removeDupesArr2(arr) {
	console.log(`3) Hello Remove Duplicates From Array 2 Exercise!!!!!`);
	return arr.filter(
		(item, index) =>
			// console.log(`4) item: ${item}, index: ${index}`)
			// console.log(`4) item: ${arr.indexOf(item)}`)
			/*
			4) item: 0 ===> 🥓 bacon
			4) item: 0
			4) item: 2 ===> 🍳 eggs
			4) item: 3 ===> 🫑 green peppers
			4) item: 4 ===> 🧀 cheese
			4) item: 5 ===> 🌶️ hot sauce
			4) item: 0
			4) item: 7 ===> 🥦 broccoli
			4) item: 4
			4) item: 7
			4) item: 5
*/
			arr.indexOf(item) === index
	);

	// console.log(`4) arr.indexOf(item):`);
}
