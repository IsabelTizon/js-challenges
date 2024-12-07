// OPCIONES PARA DEVOLVER UN OBJETO:

// 1) Object.entries():
export function findTheWinner(obj) {
	const entries = Object.entries(obj);
	console.log(entries);

	let highestVote = 0;
	let winningFood = "";

	for (let food in obj) {
		console.log(food);
		console.log(obj[food]);
		if (obj[food] > highestVote) {
			highestVote = obj[food];
			console.log(`highestVote: ${highestVote}`);
			winningFood = food;
		}
		return `The winning food is ${winningFood} with ${highestVote} votes`;
	}
}

// 2) Object.keys():
// export function findTheWinner(obj) {
// 	Object.keys(obj).forEach((key) => {
// 		console.log(key);
// 	});
// }

// 3) Object.values():
// export function findTheWinner(obj) {
// 	Object.values(obj).forEach((value) => {
// 		console.log(value);
// 	});
// }

// console.log(`Hello Pizza Night Exercise`);
