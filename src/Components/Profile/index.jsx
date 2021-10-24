import { Image } from "@chakra-ui/react";

export function Profile() {
	return (
		<div>
			<div className="text-left text-4xl font-serif font-bold">
				<p>Hi!!!!</p>
				<p>I'm WebEngineer!</p>
			</div>
			<div className="flex flex-row space-x-6 pt-6 justify-center items-center">
				<Image
					borderRadius="full"
					boxSize="100px"
					src="Nanase.jpeg"
					alt="Segun Adebayo"
				/>
				<div className="text-left font-bold font-serif text-xl">
					<p>My Name is</p>
					<p>Naoki.</p>
					<p></p>
				</div>
			</div>
		</div>
	);
}
