import { useState } from "react";

const RandomKitty = () => {
	const [kitty, setKitty] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleRandomKitty = () => {
		setLoading(true);
		fetch("https://api.thecatapi.com/v1/images/search")
			.then(response => response.json())
			.then(data => setKitty(data[0].url))
			.then(() => setLoading(false));
	};

	return (
		<div>
			<button className="btn" onClick={handleRandomKitty}>
				🐈‍⬛ The Random Cat Button 🐈‍⬛
			</button>
			{loading ? (
				<div className="ml-12 mt-4 flex">
					<div className="h-6 w-6 animate-spin rounded-full border-b-2"></div>
				</div>
			) : (
				kitty && (
					<>
						<img
							className="border-color-[#73d9b0] mt-2 max-h-96 min-h-[24rem] rounded-md transition-all"
							style={{ border: "3px solid #73d9b0" }}
							src={kitty}
							alt="Random Kitty"
						/>
						<small>
							If you didn't like this blog post I mean hey at least you got a
							cute cat photo
						</small>
					</>
				)
			)}
		</div>
	);
};

export default RandomKitty;
