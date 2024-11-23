export function sumArr2(arr) {
	console.log(`Hello count students exercise 2 with the foreach method!!!`);
	let sum = 0;
	arr.forEach((element) => {
		sum += element;
	});
	return sum;
}
