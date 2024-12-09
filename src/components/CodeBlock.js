"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js"; // Importa Highlight.js
import "highlight.js/styles/github-dark.css"; // Cambia el tema si quieres

const CodeBlock = ({ code, language }) => {
	const codeRef = useRef(null);

	useEffect(() => {
		if (codeRef.current) {
			hljs.highlightElement(codeRef.current); // Resalta el código
		}
	}, []);

	return (
		<pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
			{/* La clase dinámica incluye el lenguaje */}
			<code ref={codeRef} className={`language-${language}`}>
				{code}
			</code>
		</pre>
	);
};

export default CodeBlock;
