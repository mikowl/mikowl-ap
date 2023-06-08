import { useState } from "react";

const Dadjoke = () => {
	const [joke, setJoke] = useState<string>("");

	const generateDadJoke = () => {
		fetch("https://icanhazdadjoke.com/", {
			headers: {
				Accept: "application/json",
			},
		})
			.then(res => res.json())
			.then(data => setJoke(data.joke));
	};

	return (
		<>
			<button className="btn btn-purple w-full" onClick={generateDadJoke}>
				{joke ? "👴 Generate Another Dad Joke 🤪" : "👴 Generate Dad Joke 👴"}
			</button>
			{joke && <blockquote>{joke}</blockquote>}
		</>
	);
};

export default Dadjoke;
