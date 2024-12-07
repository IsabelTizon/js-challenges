import Image from "next/image";
import Link from "next/link";
import { homeCourses } from "@/components/homeArr";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				{/**/}
				<Image
					src="/img/js-logo.png"
					alt="Vercel Logo"
					className="dark:invert"
					width={150}
					height={24}
					priority
				/>

				{/* My Vercel deploy projects */}
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<a
						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						My{" "}
						<Image
							src="/img/vercel.svg"
							alt="Vercel Logo"
							className="dark:invert"
							width={100}
							height={24}
							priority
						/>
						projects
					</a>
				</div>
			</div>

			{/* Home Title */}
			<div className="relative flex place-items-center">
				<h1 className={`mb-3 text-7xl font-bold`}>JavaScript </h1>
			</div>

			{/* Cards */}
			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				{homeCourses.map((course) => (
					<Link
						// href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						// href="/scrimba"
						key={course.id}
						href={course.href}
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						{/* Title Interview challenges card */}
						<h2 className={`mb-3 text-2xl font-semibold`}>
							{course.name}{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						{/* Paragraph Interview challenges card */}
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							<span className="font-bold">Scrimba </span>
							{course.intro}
						</p>
					</Link>
				))}
			</div>
		</main>
	);
}

// {/* 1st card */}
// 			{/* Interview challenges card */}
// 			<Link
// 				// href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 				// href="/scrimba"
// 				key={homeCourses.href}
// 				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 			>
// 				{/* Title Interview challenges card */}
// 				<h2 className={`mb-3 text-2xl font-semibold`}>
// 					Interview Challenges{" "}
// 					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 						-&gt;
// 					</span>
// 				</h2>
// 				{/* Paragraph Interview challenges card */}
// 				<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 					<span className="font-bold">Scrimba </span>
// 					help to you for your essential tech interview preparation pack!
// 					Practice solving problems and honing the skills you need to succeed
// 					in a frontend coding interview.
// 				</p>
// 			</Link>

// 			{/* 2nd card */}
// 			{/* ? card */}
// 			<a
// 				href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// 				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 			>
// 				{/* Title ? card */}
// 				<h2 className={`mb-3 text-2xl font-semibold`}>
// 					Learn{" "}
// 					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 						-&gt;
// 					</span>
// 				</h2>
// 				{/* Paragraph ? card */}
// 				<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 					Learn about Next.js in an interactive course with&nbsp;quizzes!
// 				</p>
// 			</a>

// 			{/* 3rd card */}
// 			{/* ? card */}
// 			<a
// 				href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 			>
// 				{/* Title ? card */}
// 				<h2 className={`mb-3 text-2xl font-semibold`}>
// 					Templates{" "}
// 					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 						-&gt;
// 					</span>
// 				</h2>
// 				{/* Paragraph ? card */}
// 				<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 					Explore starter templates for Next.js.
// 				</p>
// 			</a>

// 			{/* 4th card */}
// 			{/* ? card */}
// 			<a
// 				href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// 				className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 				target="_blank"
// 				rel="noopener noreferrer"
// 			>
// 				{/* Title ? card */}
// 				<h2 className={`mb-3 text-2xl font-semibold`}>
// 					Deploy{" "}
// 					<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 						-&gt;
// 					</span>
// 					{/* Paragraph ? card */}
// 				</h2>
// 				<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
// 					Instantly deploy your Next.js site to a shareable URL with Vercel.
// 				</p>
// 			</a>
