import CodeBlock from "@/components/CodeBlock";
import { iteratingArrMethods } from "@/components/arrays/iteratingArrMethods";

export const metadata = {
	title: "Iterating Over Arrays",
	description: "Iterating Over Arrays Theory",
};

// rafc (React Arrow Fuction Component)
// rfc(React Fuctional Component)

export default function page() {
	return (
		<div className="">
			<h1>Iterating Over Arrays</h1>
			<div className="flex flex-row">
				{iteratingArrMethods.map((method) => (
					<div key={method.id} className="p-4 border rounded">
						<h2>{method.h2}</h2>
						<p>{method.p}</p>
						<CodeBlock code={method.code} language="javascript" />
					</div>
				))}
			</div>
		</div>
	);
}

{
	/* // <h2>for ... of</h2>
// <CodeBlock code={foorOf} language="javascript" />
// <h2>forEach</h2>
// <p></p>
// <CodeBlock code={forEach} language="javascript" />
// <h2>map</h2>
// <CodeBlock code={map} language="javascript" />
// <h2>filter</h2>
// <CodeBlock code={filter} language="javascript" />
// <h2>map</h2>
// <CodeBlock code={reduce} language="javascript" /> */
}
