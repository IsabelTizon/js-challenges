export const challenges = [
	{
		id: 0,
		name: "Panic Function",
		description: [
			"Write a PANIC! function. The function should take in a sentence and return the same sentence in all caps with an exclamation point (!) at the end. Use JavaScript's built in string methods. ",
			"If the string is a phrase or sentence, add a 😱 emoji in between each word",
		],
		example: [
			"Example input: 'Hello'",
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
		img: "uuuuu",
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
		img: "uuuuu",
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
		img: "",
		github: "",
	},
	{
		id: 3,
		name: "",
		description: [" "],
		example: ["", ""],
		tester: [""],
		methods: ["", "", ""],
		explanation: ["", "", "", ""],
		img: "",
		github: "",
	},
	{
		id: 4,
		name: "",
		description: [" "],
		example: ["", ""],
		tester: [""],
		methods: ["", "", ""],
		explanation: ["", "", "", ""],
		img: "",
		github: "",
	},
	{
		id: 5,
		name: "",
		description: [" "],
		example: ["", ""],
		tester: [""],
		methods: ["", "", ""],
		explanation: ["", "", "", ""],
		img: "",
		github: "",
	},
];
