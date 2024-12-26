export const challenges = [
	{
		id: 0,
		name: "Panic Function",
		descriptions: [
			"Write a PANIC! function. The function should take in a sentence and return the same sentence in all caps with an exclamation point (!) at the end. Use JavaScript's built in string methods. ",
			"If the string is a phrase or sentence, add a 😱 emoji in between each word",
		],
		examples: [
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
		explanations: [],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/panic.js",
	},
	{
		id: 1,
		name: "Whispering",
		descriptions: [
			"Write a function `whisper` that takes in a sentence and returns a new sentence in all lowercase letters with 'shh...' at the beginning.",
			"The function should also remove an exclamation point at the end of the sentence, if there is one. ",
		],
		examples: [
			"Example input: 'The KITTENS are SLEEPING!'",
			"Example output: 'shh... the kittens are sleeping'",
		],
		tester: [
			"console.log(whisper('PLEASE STOP SHOUTING.'))",
			"console.log(whisper('MA'AM, this is a Wendy's!'))",
		],
		methods: ["endsWith", "slice", "if conditional"],
		explanations: [
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
		descriptions: [
			" Write a function that takes in a string of letters and returns a sentence in which every other letter is capitalized.",
		],
		examples: [
			"Example input: 'I'm so happy it's Monday'",
			"Example output: 'I'M So hApPy iT'S MoNdAy'",
		],
		tester: [
			"console.log(alternatingCaps('When you visit Portland you have to go to VooDoo Donuts'));",
		],
		methods: ["", "", ""],
		explanations: ["", "", "", ""],

		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/alternatingCaps.js",
	},
	{
		id: 3,
		name: "toTitleCase",
		descriptions: [
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
		examples: [
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
		explanations: [
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
		descriptions: [
			"Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers!",
			"Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: ",
			"Divisible by 3 - Vacation! ",
			"Divisible by 5 - $100,000 bonus! ",
			"Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!",
			"Not divisible by 3 or 5 - :(",
			"Write a program to loop through all the ID numbers and print their prize. ",
		],
		examples: [
			"Your function's output should look something like this: ",
			"1 - :(",
			"2 - :(",
			"3 - Vacation! ",
			"4 - :(",
			"5 - $100,000 bonus!",
		],
		tester: ["console.log(awardBonuses());"],
		methods: ["conditional", "", ""],
		explanations: ["", "", "", ""],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/awardBonuses.js",
	},
	{
		id: 5,
		name: "Emojify!",
		descriptions: [
			"1) First Part of the exercise",
			"Popular services like Slack and Github allow for emoji shortscodes, meaning they will detect when a word in a sentence begins and ends with a colon (:) and automatically replace that word with an emoji.",
			"These shortcodes allow users to add an emoji to their messages by typing a code rather than searching for an emoji from a list. ",
			"const emojis = {'smile': '😊','angry': 😠','party': '🎉','heart': '💜','cat': '🐱','dog': '🐕'}",
			"Write a function that checks if a lowercase word starts and ends with a colon. If it does, remove the colons and look up the word in the emoji object.",
			"If the word is in the emojis object, return the corresponding emoji.",
			"If it isn't, return the original word.",
			"function emojify(word){return;}",
			"2) Second Part of the exercise",
			"Write a function to find any emoji shortcodes in a phrase.",
			" Your function should map over each word in the phrase, emojify any word that begins and ends with a colon, then return the emojified phrase",
			" Feel free to use your emojify function from the previous exercise!",
			"function emojify(phrase){return;}",
		],
		examples: [
			"For example, typing :smile: will replace that text with 😊",
			"1) Examples First Part of the exercise",
			"Example input: ':party:'",
			"Example output: 🎉",
			"Example input: ':flower:",
			"Example output: 'flower'",
			"Example input: 'elephant'",
			"Example output: 'elephant'",
			"2) Examples Second Part of the exercise",
			"Example input: 'I :heart: my :cat:",
			"Example output: 'I 💜 my 🐱'",
			"Example input: 'I :heart: my elephant'",
			"Example output: 'I 💜 my elephant'",
		],
		tester: [
			"To log to the console the firts Part of the exercise",
			"console.log(emojifyWord(':heart:'));",
			"console.log(emojifyWord(':flower:'));",
			"console.log(emojifyWord('elephant'));",
			"To display in the consol the second Part of the exercise",
			"console.log(emojifyPhrase('I :heart: my :cat:'));",
			"console.log(emojifyPhrase('I :heart: my :elephant:'));",
		],
		methods: [
			"toLowerCase()",
			".startsWith()",
			".slice()",
			".split()",
			"forEach()",
			".endWith()",
			"conditional",
			".join()",
			"Regular Expresion: const regex = new RegExp(`\\b(${Object.keys(emojis).join('|')})\\b`, 'g');",
			".replace(regex, (match) => emojis[match]);",
		],
		explanations: [
			"METHOD: .startsWith()",
			"verifica si una cadena comienza con los caracteres especificados, devolviendo true o false según el caso.",
			"Sintaxis",
			"string.startsWith(searchString, position)",
			"Ejemplo:",
			"const str = 'Hello, world!;'",
			"console.log(str.startsWith('Hello')); // true",
			"console.log(str.startsWith('world')); // false",
			"console.log(str.startsWith('world', 7)); // true",
			"METHOD: .endsWith()",
			"verifica si una cadena termina con los caracteres especificados, devolviendo true o false según el caso.",
			"Sintaxis",
			"string.endsWith(searchString, length)",
			"Ejemplo:",
			"const str = 'Hello, world!;'",
			"console.log(str.startsWith('Hello')); // true",
			"console.log(str.startsWith('world')); // false",
			"console.log(str.startsWith('world', 7)); // true",
			"",
		],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/emojify.js",
	},
	{
		id: 6,
		name: "Is an anagram?",
		descriptions: [
			"Anagrams are groups of words that can be spelled with the same letters. For example, the letters in 'pea' can be rearrange to spell 'ape', and the letters in 'allergy' can be rearranged to spell 'gallery.'",
			"Write a function to check if two strings of lowercase letters are anagrams. Return true if the word is an anagram. Return false if it isn't. ",
			"function isAnagram(str1, str2){}",
		],
		examples: [
			"Example input: 'allergy', 'gallery'",
			"Example output: true",
			"Example input: 'rainbow', 'crossbow'",
			"Example output: false",
		],
		tester: [
			"console.log(isAnagram('allergy, 'gallery'));",
			"console.log(isAnagram('treasure', 'measure'));",
		],
		methods: [".length", ".split()", ".toLowerCase()", ".sort()", ".join(' ')"],
		explanations: [
			"Primero de todo deberemos de ver si tienen la misma longitud, si no la tienen ya desacartamos que sean anagramas",
			"str1.toLowerCase().split('').sort().join('');",
			"💡💡💡💡💡💡💡💡 Es muy importante utilizar el método .split() para poder utilizar el método .sort()",
			"Minusculas con el metodo toLowerCase()",
			"Convertirlo a array con el método .split() para comparar elemento por elemento",
			"Ordenarlo alfabeticamente con el método .sort()",
			"Volver a juntar la cadena del array en str con el método .join('')",
		],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/isAnagram.js",
	},
	{
		id: 7,
		name: "Reverse String",
		descriptions: [
			"We Come in Peace!",
			"We've received what (we assume) is a message of peace and brotherhood from an alien planet. They almost got it right, but the messages are backward. Write functions to reverse the backward messages so we can read what they have to say!",
			"Step 1: Reverse a string",
			"Write a function that takes in a string and returns the reverse of that string. An interviewer may want to check if you know your string methods, or may want to know if you can reverse a string manually. Practice both ways!",
			"function reverseString(arr){ return arr;}",
			"Step 2: Now we'll reverse all strings in an array. Write a function that takes in an array of strings and returns a new array with all strings reversed.",
			"You can use reuse your reverseString() function, use string methods, or reverse the strings manually. ",
			"function reverseStringsInArray(arr){ return arr;}",
		],
		examples: [
			"Example Step 1",
			"Example input: !htrae ot emocleW",
			"Example output: Welcome to earth!",
			"Example Step 2",
			"Example input: ",
			"Example output: ",
		],
		tester: [
			"console.log(reverseStr(title))",
			"console.log(reverseStringsInArray(messages));",
		],
		methods: [
			"to reverse str: .split('').reverse().join('')",
			"to reverse an array of str: .map((str) => str.split('').reverse().join('')",
		],
		explanations: [
			"Reverse is an array method and you can not using on a str. What I first need to do is pass my str into an array with the split() method",
			"to reverse str:",
			".split('')",
			".reverse()",
			".join('')",
			"primero hay que separar el str en elementos para poder darlos la vuelta y despúes volverlos a unir",
			"to reverse an array of str:",
			"---------------------------------------",
			"to reverse an array the strings:",
			".map()",
			".split('')",
			".reverse()",
			".join('')",
			"primero hay que recorrer el array y a cada str separarlo en elementos para poder darlos la vuelta y despúes volverlos a unir",
		],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/reverseStr.js",
	},
	{
		id: 8,
		name: "Is a Palindrome?",
		descriptions: [
			"Palindromes are words that are the same forward or backward. For example, the words 'noon' and 'kayak' are a palindromes.",
			"Write a function to check if a lowercased string of letters is a palindrome. If the word is palindrome, return true. If it isn't, return false.",
			"function isPalindrome(str){}",
		],
		examples: [
			"Example input: 'motorbike'",
			"Example output: false",
			"Example input: 'rotator'",
			"Example output: false",
		],
		tester: [
			"console.log(isPalindrome('abba'));",
			"console.log(isPalindrome('civic'));",
			"console.log(isPalindrome('octopus'));",
			"console.log(isPalindrome('pumpkins'));",
			"console.log(isPalindrome('madam'));",
		],
		methods: ["to reverse str: .split('').reverse().join('')"],
		explanations: [
			"Reverse is an array method and you can not using on a str. What I first need to do is pass my str into an array with the split() method",
			"to reverse str:",
			".split('')",
			".reverse()",
			".join('')",
			"primero hay que separar el str en elementos para poder darlos la vuelta y despúes volverlos a unir",
			"to reverse an array of str:",
		],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/isPalindrome.js",
	},
	{
		id: 9,
		name: "removingDuplicates",
		descriptions: [
			"Grandpa's hand isn't as steady as it used to be. You finally convinced him to start using a password manager, but he accidentally typed and saved his password with a bunch of extra characters. Help him recover his password by  removing all the duplicate characters. ",
			"Your function should take in a string of characters and return a string with the duplicate characters removed. Assume that your input is lowercased with only letters and numbers. ",
			"const password = '9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23'; ",
			"function removingDuplicates(chars){}",
		],
		examples: ["Example input: 'aabbccb1212'", "Example output: 'abc12'"],
		tester: ["console.log(removingDuplicates(password));"],
		methods: [
			"empty variable",
			".plit('')",
			".map(char)",
			"if conditional",
			".includes(char)",
		],
		explanations: [
			"empty variable: ⭐⭐⭐⭐⭐⭐⭐⭐⭐ need to be inisialise with let NOT with const❗❗❗❗",
			".plit(''): to convert tghe str into an array to manipulate each element",
			".map(char): to iterate over the array. Another methods you can use to do that are: forEach(), for loop",
			".includes(char): to determine whether a given array or string contains a specified element",
		],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/removingDuplicates.js",
	},
	{
		id: 10,
		name: "countChars. How often do the letters in your name repeat? ",
		descriptions: [
			"Write a function that counts how many times each letter of your name occurs. Your function should take in your first and last name and return an object where the keys are each character in your name, and the value is how many times that character appears in your name.",
			"Your function should NOT count spaces and should not be case sensitive (a lowercase t and a capital T should be considered the same character).",
			"function countChars(str){}",
		],
		examples: [
			"Example input: 'Peggy Porth'",
			"Example output: '{p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}'",
			"Example input: 'Peggy porth 1988'",
			"Example output: '{P: 1, e: 1, g: 2, y: 1,p: 1,  o: 1, r: 1, t: 1, h: 1, ' ': 2, 1: 1, 9: 1, 8: 2 }'",
		],
		tester: [
			"console.log(countChar('Peggy Porth'));",
			"console.log(countChar('Peggy porth 1988'));",
		],
		methods: [".split()", ".reduce((counts, char) => {...}, {})", ""],
		explanations: [
			".split(): to convert a str into an array",
			".reduce((counts, char) => {...}, {}):  iterates over each character in the array, using an accumulator object counts to store the counts of each character.",
			"The counts object is initialized as an empty object {}.",
			"For each character char in the array, the code checks if the character already exists as a key in the counts object.",
			"counts[char] = (counts[char] || 0) + 1] ",
			"If counts[char] is already defined, it increments the count by 1.",
			"initializes counts[char] to 0 and then increments it by 1.",
			"After processing all characters, the reduce function returns the counts object containing the counts of each character.",
		],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/countChars.js",
	},
	{
		id: 11,
		name: "Remove Duplicates From Array",
		descriptions: [
			"Chef Mario's Recipe Book",
			"Chef Mario was in the middle of writing his cookbook masterpiece when he spilled coffee on his keyboard! Now all his recipes have repeat ingredients.",
			"Help save Chef Mario's cookbook by writing a function that takes in an array  and returns a new array with all the duplicates removed. ",
			"function removeDupesFromArray(arr){}",
		],
		examples: [
			"Example input: '🌈 rainbow','🦄 unicorn','🍭 lollipops','🦄 unicorn', '🍭 lollipops'",
			"Example output: 🌈 rainbow',''🦄 unicorn','🍭 lollipops",
			"Example input: ''",
			"Example output: ",
		],
		tester: ["console.log(removeDupesArr(eggScrambleRecipe));"],
		methods: [
			"One way: Set",
			"Another way: filter",
			"Third way: forEach, if, includes(), push()",
		],
		explanations: [
			"Firts way to resolve the exercise: Set",
			"return [...new Set(arr)]",
			"The Set object is a built-in JavaScript feature that stores unique values of any type. When you pass an array to a Set, it automatically removes duplicate values. You can then convert the Set back to an array.",
			"Firts way to resolve the exercise: filter",
			"return arr.filter((item, index) => arr.indexOf(item) === index);",
			"return arr.filter((item, index) => arr.indexOf(item) === index);",
			"arr.indexOf(item)",
			"nos va a devolver el index de cada elemento como vemos a continuacion",
			"item: 0 ===> 🥓 bacon",
			"item: 0",
			"item: 2 ===> 🍳 eggs",
			"item: 3 ===> 🫑 green peppers",
			"item: 4 ===> 🧀 cheese",
			"item: 5 ===> 🌶️ hot sauce",
			"item: 0",
			"item: 7 ===> 🥦 broccoli",
			"item: 4",
			"item: 7",
			"item: 5",
			"arr.indexOf(item) === index",
			"y si ese elemento coincide con su indice va a ser retornado. Por lo tanto solo un item de cada elemento podrá ser retornado y tendremos como resultado un array sin elementos duplicados",
			"Comparison between Set and filter",
			"Set: This is a more modern and efficient approach, especially for large arrays, as it handles duplicates automatically and is concise.",
			"filter + indexOf: This method is more traditional and might be more intuitive for beginners, but it could be less efficient for large arrays because it involves multiple passes over the array.",
			"Third way to resolve the exercise: forEach, if, includes(), push()",
			"Hago un loop con el método forEach para iterar el array. Si la variable que he creado inicializándola como un array vacio no incluye el elemento hago un push",
		],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/removeDupesArr.js",
	},
	{
		id: 12,
		name: "Pumpkin's Prizes",
		descriptions: [
			"Scrimba mascot Pumpkin has won the grand prize at an international show. Below are Pumpkin's scores from the judges, as well as all the prizes he's won. In all the excitement of victory, they've become a jumbled mess of nested arrays Let's help Pumpkin by sorting it out. ",
			"Write a function to flatten nested arrays of strings or numbers into a single array. There's a method for this, but pratice both doing it manually and using the method. ",
			"const kittyScores = [[39, 99, 76],89,98,[87, 56, 90],[96, 95],40,78,50,[63],];",
			"const kittyPrizes = [['💰', '🐟', '🐟'],'🏆','💐','💵',['💵', '🏆'],['🐟', '💐', '💐'],'💵','💵',['🐟'],'🐟',];",
			"function flatten(arr){}",
		],
		examples: [
			"Example input: '[1, [4,5], [4,7,6,4], 3, 5]'",
			"Example output: '[1, 4, 5, 4, 7, 6, 4, 3, 5]'",
		],
		tester: [
			"console.log(flatten(kittyPrizes));",
			"console.log(flatten(kittyScores));",
		],
		methods: ["", "", ""],
		explanations: ["", "", "", ""],
		github:
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/flatten.js",
	},
	{
		id: 13,
		name: "Count the Scrimba Students",
		descriptions: [
			"Alex from Scrimba wants to know how many new students have attended.",
			"Scrimba's weekly Town Hall event this year",
			"He has an array of first-time attendees for each month of the year. Help him find the total number of attendees!",
			"Your function should take in an array and return a number representing the total number of new attendees.",
			"const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];",
			"function sumArray(arr){}",
		],
		examples: ["Example input: [1,2,3]", "Example output: 6"],
		tester: ["console.log(sumArray(studentArr));"],
		methods: ["reduce()", "forEach()", ""],
		explanations: [
			"Exercise 2: The return statement must be outside the forEach() loop, on the same level as the function body, not nested inside the loop!!!",
		],
		github: [
			"https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/exercises/countStudents.js",
		],
	},
	{
		id: 14,
		name: "Pizza Night?",
		descriptions: [
			"It's the weekend and you and your friends can't agree on what to order for dinner, so you put it to a vote. ",
			"Write a function to find the food with the highest number of votes. ",
			"Your function should take in a food object and find the food with the most votes. It should log the winner, along with how many votes it received. ",
			"const gameNightFood = {'🍕 pizza': 3, '🌮 tacos': 10, '🥗 salads': 7, '🍝 pasta': 5}",
			"function findTheWinner(obj){}",
			"",
		],
		examples: [
			"Example input: {'🐈 cats': 19, '🐕 dogs': 17",
			"Example output: The winner is 🐈 cats with 19 votes!",
		],
		tester: ["console.log(findTheWinner(gameNightFood));"],
		methods: ["", "", ""],
		explanations: ["", "", "", ""],
		github: "https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimbaChallengesJS/exercises/pizzaNight.js",
	},
	{
		id: 15,
		name: "Contar Ovejas",
		descriptions: ["Tienes un rebaño de ovejas y a cada una de ellas le has puesto un nombre. Estas ovejas también son de colores", "El veterinario te pide que le entregues una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.", "Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.", "export default function contarOvejas(ovejas) {}", "", "", "", "", ""],
		examples: [
			"Example input: ''",
			"Example output: ",
			"Example input: ''",
			"Example output: ",
		],
		tester: [""],
		methods: ["Arrow function WITHOUT {} and WITHOUT return", "arrow function WITH {} and return", "includes()", "toLowerCase()", "We DO NOT NEED an if case",],
		explanations: [" - EXERCISE 1: usar {} y return", "Si necesitas realizar varias operaciones dentro de la función, como calcular valores, declarar variables o tener lógica condicional compleja, deberás usar {}. Esto es porque dentro de un bloque de código ({}), JavaScript no sabe automáticamente qué valor devolver, por lo que necesitas especificar un return explícito.", " - EXERCISE 2: función flecha sin {} (retorno implícito)", "Si la función es simple y realiza solo una operación o devuelve un valor directamente sin necesidad de lógica compleja, puedes omitir {}. En este caso, el valor después de la flecha se devuelve automáticamente, y no es necesario usar return."],
		github: "https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimbaChallengesJS/exercises/contarOvejas.js",
	},
	{
		id: 16,
		name: "List of Gifts Exercise",
		descriptions: ["Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱", "¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)", "Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.", "Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!", "Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:", "const carta = 'bici coche balón _playstation bici coche peluche'", "Al ejecutar el método debería devolver lo siguiente:",],
		examples: [
			"Example input: const carta = 'bici coche balón _playstation bici coche peluche'",
			"Example output: '{bici: 2, coche: 2, balón: 1,peluche: 1}'",
			"Example input: ''",
			"Example output: ",
		],
		tester: [""],
		methods: ["", "", ""],
		explanations: ["", "", "", ""],
		github: "",
	},
];
