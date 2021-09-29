import Head from "next/head";
import { Footer } from "src/Components/Footer";
// import { Header } from "src/Components/Header";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<div>
					<h1>About</h1>
					<div></div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
