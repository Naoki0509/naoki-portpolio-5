import Head from "next/head";
import { Footer } from "src/Components/Footer";
import { Header } from "src/Components/Header";
import { HeadLine } from "src/Components/HeadLine";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen ">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<HeadLine />
			<main className="flex flex-col items-center justify-center w-full flex-1 px-10 text-center"></main>
			<Footer />
		</div>
	);
}
