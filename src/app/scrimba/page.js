import Link from "next/link";
import { challenges } from "../../components/challenges";

export const metadata = {
	title: "Scrimba Interview Challenges",
	description:
		"60 interview challenges from Scrimba to study different methods",
};

export default function Scrimba() {
	// Check in the terminal if my array is working before maping it
	console.log("challenges", challenges);
	return (
		<div>
			<div>JavaScript Interview Challenges</div>
			<div className="flex flex-col">
				{challenges.map((challenge) => (
					<Link
						className=""
						key={challenge.id}
						href={`/scrimba/${challenge.id}`}
					>
						<h3>- {challenge.name}</h3>
					</Link>
				))}
			</div>
		</div>
	);
}
