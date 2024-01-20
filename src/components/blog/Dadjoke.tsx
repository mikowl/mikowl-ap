import { useState } from "react";

const Dadjoke = () => {
	const [joke, setJoke] = useState("");

	const generateDadJoke = async () => {
		try {
			const response = await fetch("https://icanhazdadjoke.com/", {
				headers: {
					Accept: "application/json",
				},
			});
			const data = await response.json();
			setJoke(data.joke);
		} catch (error) {
			console.log(error);
		}
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
