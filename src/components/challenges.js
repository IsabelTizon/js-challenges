export const challenges = [
	{
		id: 0,
		name: "Panic Function",
		description: [
			"Write a PANIC! function. The function should take in a sentence and return the same sentence in all caps with an exclamation point (!) at the end. Use JavaScript's built in string methods. ",
			"If the string is a phrase or sentence, add a 😱 emoji in between each word",
		],
		example: [
			"Example input: 'Hello",
			"Example output: 'HELLO!'",
			"Example input: 'I'm almost out of coffee'",
			"Example output: 'I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!'",
		],
		tester: [
			"console.log(panic('I'm almost out of coffee')); ",
			"console.log(panic('winter is coming'))",
		],
		methods: [".split()", " .join ()"],
		explanation: [],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/panic.js",
	},
	{
		id: 1,
		name: "Whispering",
		description: [
			"Write a function `whisper` that takes in a sentence and returns a new sentence in all lowercase letters with 'shh...' at the beginning.",
			"The function should also remove an exclamation point at the end of the sentence, if there is one. ",
		],
		example: [
			"Example input: 'The KITTENS are SLEEPING!'",
			"Example output: 'shh... the kittens are sleeping'",
		],
		tester: [
			"console.log(whisper('PLEASE STOP SHOUTING.'))",
			"console.log(whisper('MA'AM, this is a Wendy's!'))",
		],
		methods: ["endsWith", "slice", "if conditional"],
		explanation: [
			".pop()",
			"I tried pop method firts but the console gave me back Wendy's! instead without!",
			"I had a problem with .pop() and I needed to create a new variable to add the pop method because if not it gave me back the same str",
			".slice(0,-1)",
			"The exercise need to be done with .slice() method to be able to delete '!'",
		],

		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/whispering.js",
	},
	{
		id: 2,
		name: "Alternating Caps",
		description: [
			" Write a function that takes in a string of letters and returns a sentence in which every other letter is capitalized.",
		],
		example: [
			"Example input: 'I'm so happy it's Monday'",
			"Example output: 'I'M So hApPy iT'S MoNdAy'",
		],
		tester: [
			"console.log(alternatingCaps('When you visit Portland you have to go to VooDoo Donuts'));",
		],
		methods: ["", "", ""],
		explanation: ["", "", "", ""],

		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/alternatingCaps.js",
	},
	{
		id: 3,
		name: "toTitleCase",
		description: [
			"Write a function that will capitalize every word in a sentence.",
			"Example Input: 'everything, everywhere, all at once'",
			"Example Output: 'Everything, Everywhere, All At Once'",
			"First, write a function that takes in one word and  capitalizes the first letter of that word.",
			"Example Input: 'scrimba'",
			"Example Output: 'Scrimba'",
			"function capitalizeWord(word){return;}",
			"Now write a function that capitalizes every word in a sentence. How can you reuse the function you just wrote?",
			"function toTitleCase(str){ }",
		],
		example: [
			"Example Input: 'everything, everywhere, all at once'",
			"Example Output: 'Everything, Everywhere, All At Once'",
		],
		tester: [
			"console.log(capitalizeWord('pumpkin'));",
			"console.log(toTitleCase('pumpkin pranced purposefully across the pond'));",
		],
		methods: [
			"slice(' ')",
			".charAt(0)",
			".toUpperCase()",
			".slice(1)",
			".toLowerCase()",
			".join(' ')",
		],
		explanation: [
			"split(' '): método utilizado para dividir una cadena de caracteres en un string. ",
			"split(' '): dividirá el str en palabras dentro de un array",
			"split(''): dividirá el str en letras dentro de un array",
			".charAt(0) en JavaScript se utiliza para obtener el carácter en una posición específica de una cadena de texto. En este caso, .charAt(0) obtiene el primer carácter de la cadena.",
			".charAt(0).toUpperCase(): para poner el primer elemento en mayusculas",
			".slice(1): para cortar desde después'es del elemneto primero",
			".slice(1).toLowerCase(): para poner mayusculas todos los elementos después del primero",
			".join(' ')",
		],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/toTitleCase.js",
	},
	{
		id: 4,
		name: "Definitely Not FizzBuzz Exercise, awardBonuses",
		description: [
			"Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers!",
			"Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: ",
			"Divisible by 3 - Vacation! ",
			"Divisible by 5 - $100,000 bonus! ",
			"Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!",
			"Not divisible by 3 or 5 - :(",
			"Write a program to loop through all the ID numbers and print their prize. ",
		],
		example: [
			"Your function's output should look something like this: ",
			"1 - :(",
			"2 - :(",
			"3 - Vacation! ",
			"4 - :(",
			"5 - $100,000 bonus!",
		],
		tester: ["console.log(awardBonuses());"],
		methods: ["conditional", "", ""],
		explanation: ["", "", "", ""],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/awardBonuses.js",
	},
	{
		id: 5,
		name: "",
		description: [" "],
		example: ["", ""],
		tester: [""],
		methods: ["", "", ""],
		explanation: ["", "", "", ""],
		github: "",
	},
];
