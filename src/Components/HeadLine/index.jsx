import Link from "next/Link";

const ITEMS = [
	{ title: "About", href: "/about" },
	{ title: "Blog", href: "/blog" },
];

export function HeadLine() {
	return (
		<div className="sm:hidden block items-center justify-center text-center w-full border-t">
			{ITEMS.map((item) => {
				return (
					<div className="py-2 border-b">
						<Link href={item.href}>
							<a className="font-serif font-bold text-2xl text-gray-500 hover:text-gray-700">
								{item.title}
							</a>
						</Link>
					</div>
				);
			})}
		</div>
	);
}
