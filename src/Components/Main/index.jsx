import { About } from "src/Components/About";
import { Profile } from "src/Components/Profile";

export function Main() {
	return (
		<div className="flex flex-col justify-center items-center">
			<Profile />
			<About />
		</div>
	);
}
