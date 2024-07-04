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
	// ${employees} me
	console.log(
		`employees:[object Object],[object Object]:${employees}`
	);
	// ${employees}
	console.log(
		`employees: [{ id: 1, name: 'employee 1' },{ id: 2, name: 'employee 2' },:`,
		employees
	);

	// iterate over the employees array or loop through employees array using forEach().
	console.log("Using forEach():");

	employees.forEach((employee) => {
		console.log(
			`ID: ${employee.id}, Name: ${employee.name}`
		);

		//Conditional

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
