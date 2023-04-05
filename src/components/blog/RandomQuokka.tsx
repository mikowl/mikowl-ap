import { useState } from "react";

const RandomQuokka = () => {
	const [quokka, setQuokka] = useState<string | null>(null);

	// use quokka.pics to get random quokka image
	const randomQuokka = () => {
		fetch("https://quokka.pics/api/")
			.then(res => res.json())
			.then(data => setQuokka(data.image));
	};

	return (
		<div>
			<button className="btn" onClick={randomQuokka}>
				🐨 The Random Quokka Button 🐨
			</button>
			{quokka && (
				<>
					<img
						className="rounded-md border-color-[#73d9b0] max-h-96 min-h-[24rem] mt-2 transition-all"
						style={{ border: "3px solid #73d9b0" }}
						src={quokka}
						alt="Random Quokka"
					/>
					<small>
						If you didn't like this blog post I mean hey at least you got a cute
						quokka photo
					</small>
				</>
			)}
		</div>
	);
};

export default RandomQuokka;
