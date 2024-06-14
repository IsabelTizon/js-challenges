export default function panicFunction(str) {
	return str.split("").join(" 😱 ").toUpperCase() + "!";
}

console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
