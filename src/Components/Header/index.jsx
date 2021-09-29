import Link from "next/link";
export function Header() {
	return (
		<header className="flex items-center justify-center w-full">
			<div className="">
				<div className="">
					<div className="flex justify-start items-center">
						<div>
							<h1>N's Blog</h1>
						</div>
						<ui>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/blog">
									<a>Blog</a>
								</Link>
							</li>
						</ui>
					</div>
				</div>
			</div>
		</header>
	);
}
