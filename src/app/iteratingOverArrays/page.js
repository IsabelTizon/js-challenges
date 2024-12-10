import CodeBlock from "@/components/CodeBlock";

export const metadata = {
	title: "Iterating Over Arrays",
	description: "Iterating Over Arrays Theory",
};

// rafc (React Arrow Fuction Component)
// rfc(React Fuctional Component)

export default function page() {
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

	return (
		<div className="p-8">
			<h1>Iterating Over Arrays</h1>

			<h2>Bucle for clásico</h2>
			<CodeBlock code={foorLoop} language="javascript" />
			<h2>for ... of</h2>
			<CodeBlock code={foorOf} language="javascript" />
			<h2>forEach</h2>
			<CodeBlock code={forEach} language="javascript" />
			<h2>map</h2>
			<CodeBlock code={map} language="javascript" />
			<h2>map</h2>
			<CodeBlock code={filter} language="javascript" />
			<h2>map</h2>
			<CodeBlock code={reduce} language="javascript" />
		</div>
	);
}
