const foorLoop = `
    const array = [1, 2, 3, 4, 5];

    for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    }
    `;

const foorOf = `
    const array = [1, 2, 3, 4, 5];

	for (const element of array) {
		console.log(element);
		}
    `;

const forEach = `
    const array = [1, 2, 3, 4, 5];
    
	array.forEach((element, index) => {
    console.log(\`Índice: \${index}, Elemento: \${element}\`);
    });
    `;

const map = `
    const array = [1, 2, 3, 4, 5];
    
    const squared = array.map((num) => num ** 2);

    console.log(squared); // [1, 4, 9, 16, 25]
    `;

const filter = `
    const array = [1, 2, 3, 4, 5];

    const even = array.filter((num) => num % 2 === 0);

    console.log(even); // [2, 4]
    `;

const reduce = `
    const array = [1, 2, 3, 4, 5];

    const sum = array.reduce((acc, curr) => acc + curr, 0);

    console.log(sum); // 15
    `;

const some = `
    const array = [1, 2, 3, 4, 5];

    const sum = array.reduce((acc, curr) => acc + curr, 0);

    console.log(sum); // 15
    `;

const every = `
    const array = [1, 2, 3, 4, 5];

    const sum = array.reduce((acc, curr) => acc + curr, 0);

    console.log(sum); // 15
    `;

const find = `
    const array = [1, 2, 3, 4, 5];

    const sum = array.reduce((acc, curr) => acc + curr, 0);

    console.log(sum); // 15
    `;

const findIndex = `
    const array = [1, 2, 3, 4, 5];

    const sum = array.reduce((acc, curr) => acc + curr, 0);

    console.log(sum); // 15
    `;

const flatMap = `
    const array = [1, 2, 3, 4, 5];

    const sum = array.reduce((acc, curr) => acc + curr, 0);

    console.log(sum); // 15
    `;

const keysValuesEntries = `
 
    const array = ["a", "b", "c"];

		// Claves (índices)
		for (const key of array.keys()) {
			console.log(key); // 0, 1, 2
		}

		// Valores
		for (const value of array.values()) {
			console.log(value); // "a", "b", "c"
		}

		// Pares clave-valor
		for (const [index, value] of array.entries()) {
			console.log(index, value); // 0 "a", 1 "b", 2 "c"
		}
    `;

export const iteratingArrMethods = [
	{
		id: 0,
		h2: "Bucle for clásico",
		p: "Ejecuta una función para cada elemento del array. No devuelve un nuevoarray. javascript Copy code",
		code: foorLoop,
		exercises: [""],
	},
	{
		id: 1,
		h2: "for...of",
		p: "Un enfoque más moderno para iterar sobre los elementos de un array directamente.",
		code: foorOf,
		exercises: [""],
	},
	{
		id: 2,
		h2: "forEach",
		p: "Ejecuta una función para cada elemento del array. No devuelve un nuevo array.",
		code: forEach,
		exercises: [""],
	},
	{
		id: 3,
		h2: "map",
		p: "Crea un nuevo array transformando los elementos del original.",
		code: map,
		exercises: [""],
	},
	{
		id: 4,
		h2: "filter",
		p: "Crea un nuevo array con elementos que cumplan una condición.",
		code: filter,
		exercises: [""],
	},
	{
		id: 5,
		h2: "reduce",
		p: "Reduce el array a un solo valor aplicando una función acumulativa.",
		code: reduce,
		exercises: [""],
	},
	{
		id: 6,
		h2: "some",
		p: "Comprueba si al menos un elemento cumple una condición. Devuelve un booleano.",
		code: some,
		exercises: [""],
	},
	{
		id: 7,
		h2: "every",
		p: "Comprueba si todos los elementos cumplen una condición. Devuelve un booleano",
		code: every,
		exercises: [""],
	},
	{
		id: 8,
		h2: "find",
		p: "Devuelve el primer elemento que cumpla una condición.",
		code: find,
		exercises: [""],
	},
	{
		id: 9,
		h2: "findIndex",
		p: "Devuelve el índice del primer elemento que cumpla una condición.",
		code: findIndex,
		exercises: [""],
	},
	{
		id: 10,
		h2: "flatMap",
		p: "Aplica una transformación y aplana el array en un solo paso.",
		code: flatMap,
		exercises: [""],
	},
	{
		id: 11,
		h2: "keys, values y entries",
		p: "Itera las claves, valores o pares clave-valor de un array.",
		code: keysValuesEntries,
		exercises: [""],
	},
];
