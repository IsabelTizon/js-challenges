export function awardBonuses() {
	console.log("100 employees: employees = [0,1,2,3,4...]");

	//Este código crea un array de 100 objetos, donde cada objeto representa un empleado con un id y un nombre.
	const employees = Array.from(
		{ length: 100 },
		(_, index) => ({
			id: index + 1,
			name: `employee ${index + 1}`,
		})
	);
	// ${employees} muestra por consola muchos arrays
	console.log(
		`++++++++++++++++++++++++++ CONSOLE.LOG OF employees CON EL SIMBOLO DEL DOLAR Y LA PALABRA EN CURLY BRACES DANDO COMO RESULTADO 100 ARRAYS. E.G ===> ${employees}`
	);
	// employees muestra por consola un array
	console.log(
		`++++++++++++++++++++++++++ CONSOLE.LOG OF employees DANDO COMO RESULTADO UN ARRAY CON 100 OBJETOS. E.G ===> `,
		employees
	);

	// iterate over the employees array or loop through employees array using forEach().
	console.log("Using forEach():");

	employees.forEach((employee) => {
		console.log(
			`ID: ${employee.id}, Name: ${employee.name}`
		);

		//Conditional Staments
		// It is divisible by 3 and 5
		if (employee.id % 15 === 0) {
			console.log(
				`=====> Congratulations ${employee.name} JACKPOT! 1 Million and a Yacht!`
			);
		} else if (employee.id % 3 === 0) {
			console.log(
				`=====> Congratulations ${employee.name} You won a vacation!`
			);
		} else if (employee.id % 5 === 0) {
			console.log(
				`=====> Congratulations ${employee.name} You won a 100,000 bonus!`
			);
		} else {
			console.log(
				`=====> :( Sorry ${employee.name} not this time`
			);
		}
	});

	return "hello";
}
