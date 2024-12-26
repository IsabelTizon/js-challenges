"use client";

import { Aref_Ruqaa } from "next/font/google";
// import { panic } from "./panic";
// import { whispering } from "./whispering";
// import { alternatingCaps } from "./alternatingCaps";
// import { toTitleCase } from "./toTitleCase";
// import { awardBonuses } from "./awardBonuses";
// import { emojify } from "./emojify";
// import { emojify2 } from "./emojify";
// import { isAnagram } from "./isAnagram";
// import { reverseStr } from "./reverseStr";
// import { reverseStrArray } from "./reverseStr";
// import { isPalindrome } from "./isPalindrome";
// import { removingDuplicates } from "./removingDuplicates";
// import { countChar } from "./countChar";
// import { removeDupesArr } from "./removeDupesArr";
// import { removeDupesArr2 } from "./removeDupesArr";
// import { removeDupesArr3 } from "./removeDupesArr";
// import { flatten } from "./flatten";
// import { flatten2 } from "./flatten";
// import { sumArr } from "./countStudents";
// import { sumArr2 } from "./countStudents2";
// import { findTheWinner } from "./pizzaNight";
// import {contarOvejas} from "./contarOvejas";
// import {contarOvejas2} from "./contarOvejas";
import { listGifts} from "./listGifts"


export default function courseConsole() {
	return (
		<div>
			<h1 className="mb-10">Try your exercises on the client side!</h1>
			<p>This page is to try each exercise by the client side</p>
		</div>
	);
}
// 1) panic exercise
// console.log(panic("I'm almost out of coffee"));
// console.log(panic("winter is coming"));

// 2) whispering exercise
// console.log(whispering("PLEASE STOP SHOUTING."));
// console.log(whispering("MA'AM, this is a Wendy's!"));

// 3) Alternative Capitals Exercise
// console.log(
// 	alternatingCaps(
// 		"When you visit Portland you have to go to VooDoo Donuts"
// 	)
// );

// 4) To title Case Exercise
// console.log(toTitleCase("pumpkin"));
// console.log(
// 	toTitleCase(
// 		"pumpkin pranced purposefully across the pond"
// 	)
// );

// 5) Definitely Not FizzBuzz Exercise
// console.log(awardBonuses());

// 6) Emoji Exercise
// console.log(emojify(":party:"));
// console.log(emojify(":aleman:"));
// console.log(emojify2("I :heart: my :cat:"));
// console.log(emojify2("I :want: my :gelato:"));

// 7) is an anagram exercise
// console.log(isAnagram("Allergy", "Gallery"));
// console.log(isAnagram("Treasure", "Measure"));

// 8) Reverse String Exercise
// const title = ":htraE no od ot ffutS";
// console.log(reverseStr(title));
// const messages = [
// 	"maerc eci yrT",
// 	"rewoT leffiE tisiV",
// 	"noom eht ot snamuh etacoleR",
// 	"egrahc ni stac tuP",
// ];
// console.log(reverseStrArray(messages));

// 9) is a palindrome exercise
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("civic"));
// console.log(isPalindrome("Octopus"));
// console.log(isPalindrome("octopus"));
// console.log(isPalindrome("pumpkins"));
// console.log(isPalindrome("madam"));

// 10) Removing Duplicates characters Exercise
// console.log(removingDuplicates());
// console.log(removingDuplicates(password));

// 11) countChars exercise
// console.log(countChars());
// console.log(countChar("Peggy Porth"));
// console.log(countChar("Peggy porth 1988"));

// 12) Remove Duplicates From Array Exercise
// const eggScrambleRecipe = [
// 	"🥓 bacon",
// 	"🥓 bacon",
// 	"🍳 eggs",
// 	"🫑 green peppers",
// 	"🧀 cheese",
// 	"🌶️ hot sauce",
// 	"🥓 bacon",
// 	"🥦 broccoli",
// 	"🧀 cheese",
// 	"🥦 broccoli",
// 	"🌶️ hot sauce",
// ];
// console.log(removeDupesArr());
// console.log(removeDupesArr(eggScrambleRecipe));
// console.log(removeDupesArr2(eggScrambleRecipe));
// console.log(removeDupesArr3(eggScrambleRecipe));

// 13) exercise
// const kittyScores = [
// 	[39, 99, 76],
// 	89,
// 	98,
// 	[87, 56, 90],
// 	[96, 95],
// 	40,
// 	78,
// 	50,
// 	[63],
// ];

// const kittyPrizes = [
// 	["💰", "🐟", "🐟"],
// 	"🏆",
// 	"💐",
// 	"💵",
// 	["💵", "🏆"],
// 	["🐟", "💐", "💐"],
// 	"💵",
// 	"💵",
// 	["🐟"],
// 	"🐟",
// ];

// console.log(flatten());
// console.log(kittyScores);
// console.log(flatten(kittyScores));
// console.log(kittyPrizes);
// console.log(flatten(kittyPrizes));
// console.log(flatten2(kittyScores));
// console.log(flatten2(kittyPrizes));

// 14) Count Scrimba Students Exercise with reduce method
// console.log(countStudents());
// const studentArr = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];
// console.log(`Scrimba Students total number: ${sumArr(studentArr)}`);

// 15) Count Scrimba Students Exercise with forEach method
// const studentArr = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];
// console.log(`Scrimba Students total number: ${sumArr2(studentArr)}`);

// 16) Pizza Night Exercise
// const gameNightFood = {
// 	"🍕 pizza": 3,
// 	"🌮 tacos": 10,
// 	"🥗 salads": 7,
// 	"🍝 pasta": 5,
// };
// console.log(findTheWinner(gameNightFood));

// 17) Contar Ovejas Exercise
// const ovejas = [
// 	{ name: 'Noa', color: 'azul' },
// 	{ name: 'Euge', color: 'rojo' },
// 	{ name: 'Navidad', color: 'rojo' },
// 	{ name: 'Ki Na Ma', color: 'rojo'},
// 	{ name: 'AAAAAaaaaa', color: 'rojo' },
// 	{ name: 'Nnnnnnnn', color: 'rojo'}
//   ]
// console.log(contarOvejas(ovejas));
// console.log(contarOvejas2(ovejas));

// 18) ListGifts Exercise
console.log(listGifts());
const carta = 'bici coche balón _playstation bici coche peluche';
console.log(listGifts(carta));
// 19) Exercise
// 20) Exercise
// 21) Exercise
// 22) Exercise
// 23) Exercise
// 24) Exercise
// 25) Exercise
// 26) Exercise
// 27) Exercise
// 28) Exercise
// 29) Exercise
// 30) Exercise
// 31) Exercise
// 32) Exercise
// 33) Exercise
// 34) Exercise
// 35) Exercise
// 36) Exercise
// 37) Exercise
// 38) Exercise
// 39) Exercise
// 40) Exercise
// 41) Exercise
// 42) Exercise
// 43) Exercise
// 44) Exercise
// 45) Exercise
// 46) Exercise
// 47) Exercise
// 48) Exercise
// 49) Exercise
// 50) Exercise
// 51) Exercise
// 52) Exercise
// 53) Exercise
// 54) Exercise
// 55) Exercise
// 56) Exercise
// 57) Exercise
// 58) Exercise
// 59) Exercise
// 60) Exercise
