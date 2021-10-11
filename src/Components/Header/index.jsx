import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const navigation = [
	{ href: "/", name: "Home", current: true },
	{ href: "/blog", name: "Blog", current: false },
];

export function Header() {
	return (
		<div className="flex justify-between items-center w-full border-[1px]  border-black py-2 px-4">
			<div className="flex flex-row justify-center items-center space-x-6">
				<h1 className="text-xl font-bold font-serif">N"s Blog</h1>
				<ui className="md:flex hidden flex-row font-serif list-none space-x-4">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
				</ui>
			</div>
			<div className="flex md:hidden">
				<AiOutlineMenu className="text-2xl" />
			</div>
		</div>
	);
}
