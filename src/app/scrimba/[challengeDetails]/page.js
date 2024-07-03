import Link from "next/link";
import { challenges } from "../../../components/challenges";

export default function ChallengeDetails({ params }) {
	const { challengeDetails } = params;

	const challenge = challenges[challengeDetails];

	console.log(
		"=================================================="
	);
	/*
	DESESTRUCTURACION EN JS:
	https://www.freecodecamp.org/news/destructuring-in-javascript/

	*/
	// console.log("params => ", params);
	/*
	console.log("params => ", params);
	params = EL OBJETO Y SU VALOR
	params =>  { challengeDetails: '0' }	
	*/

	console.log(
		"=================================================="
	);
	// console.log("challengeDetails =>", challengeDetails);
	/*
	console.log("challengeDetails =>", challengeDetails);
	challengeDetails = SOLO EL VALOR
	(challengeDetails) => 0;	
	*/
	console.log(
		"=================================================="
	);
	// console.log(
	// 	"challenges[challengeDetails]===>",
	// 	challenges[challengeDetails]
	// );
	/*
	console.log(
		"challenges[challengeDetails]===>",
		challenges[challengeDetails]
	);		challenges= TODAS LOS OBJENTOS CON SUS PROPIEDADES Y VALORES
	challenges[challengeDetails] = LAS PROPIEDADES Y LOS VALORES DEL OBJETO ESTABLECIDO
	*/
	console.log(
		"=================================================="
	);
	// console.log("All Challenges", challenges);
	/*
	console.log("All Challenges", challenges);
	challenges= TODAS LOS OBJENTOS CON SUS PROPIEDADES Y VALORES
	*/

	return (
		<div>
			<h1 className="pepito" key={challenge.id}>
				{challenge.id}
				{challenge.name}
			</h1>
			<h2 className="font-bold">Instructions</h2>
			<div>
				{challenge.descriptions.map(
					(instructions, index) => {
						// console.log(
						// 	"challenge.description ===> ",
						// 	challenge.description
						// );
						return (
							<p
								className="mt-[1rem]"
								key={`${instructions}-${index}`}
							>
								{instructions}
							</p>
						);
					}
				)}
			</div>
			<h2 className="font-bold">Examples</h2>
			<div>
				{challenge.examples.map((example, index) => {
					// console.log(
					// 	"Challenge Example: ",
					// 	challenge.example
					// );
					return (
						<p
							className="mt-[1rem]"
							key={`${example}-${index}`}
						>
							{example}
						</p>
					);
				})}
			</div>
			<h2 className="font-bold">Test your function</h2>
			<div>
				{challenge.tester.map((testing, index) => {
					console.log("Tester: ", challenge.tester);
					return (
						<p
							className="mt-[1rem]"
							key={`${testing}-${index}`}
						>
							{testing}
						</p>
					);
				})}
			</div>
			<h2 className="font-bold">Methods used: </h2>
			<div>
				{challenge.methods.map((method, index) => {
					// console.log(
					// 	"challenge.methods ===> ",
					// 	challenge.methods
					// );
					return (
						<p key={`${method}-${index}`}> {method}</p>
					);
				})}
			</div>
			<h2 className="font-bold">Explanation</h2>
			<div>
				{challenge.explanations.map(
					(clarification, index) => {
						// console.log(
						// 	"challenge.explanation ===> ",
						// 	challenge.explanation
						// );
						return (
							<p key={`${clarification}-${index}`}>
								{clarification}
							</p>
						);
					}
				)}
			</div>
			<Link target="_blank" href={challenge.github}>
				github
			</Link>
		</div>
	);
}
