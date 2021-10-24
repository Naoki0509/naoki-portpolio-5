import Link from "next/Link";

export function Header() {
	return (
		<div className="flex justify-center items-center pt-4 pb-2">
			<Link href="/">
				<a className="text-center font-serif font-bold text-3xl"> N's Blog</a>
			</Link>
		</div>
	);
}
