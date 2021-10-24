const ITEMS = [
	{ title: "Home", link: "/" },
	{ title: "About", link: "/about" },
	{ title: "Blog", link: "/blog" },
];

import Link from "next/Link";

export function Header() {
	return (
		<div>
			<nav className="border fixed">
				<div className="nav-brand">
					<div>
						<Link href="/">
							<a className="text-xl tracking-widest">N's Blog</a>
						</Link>
					</div>
				</div>
				<div className="collapsible">
					<input id="collapsible2" type="checkbox" name="collapsible2" />
					<label for="collapsible2">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</label>
					<div className="collapsible-body">
						<ul className="inline">
							{ITEMS.map((item, index) => {
								return (
									<li key={index}>
										<Link href={item.link}>
											<a className="text-xl">{item.title}</a>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
