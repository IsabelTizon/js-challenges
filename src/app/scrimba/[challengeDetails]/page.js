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
			Hello World!
			<h1 className="" key={challenge.id}>
				{challenge.name}
			</h1>
			<div>
				{challenge.description.map((intructions) => {
					console.log(
						"challenge.description ===> ",
						challenge.description
					);
					return (
						<p className="mt-[1rem]" key={intructions}>
							{intructions}
						</p>
					);
				})}
			</div>
			<Link
				key={challenge.github}
				target="_blank"
				href="https://github.com/IsabelTizon/js-challenges/blob/main/src/app/scrimba/courses/panicFunction.js"
			>
				github
			</Link>
		</div>
	);
}
