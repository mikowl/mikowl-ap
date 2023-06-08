import { useState } from "react";

const RandomQuokka = () => {
	const [quokka, setQuokka] = useState<string | null>(null);
	const [imageLoaded, setImageLoaded] = useState<boolean>(false);

	const randomQuokka = () => {
		fetch("https://quokka.pics/api/")
			.then(res => res.json())
			.then(data => {
				setImageLoaded(false);
				setQuokka(data.image);
			});
	};

	const handleImageLoad = () => {
		setImageLoaded(true);
		console.log("handleImageLoad");
	};

	return (
		<div>
			<button className="btn" onClick={randomQuokka}>
				🐨 The Random Quokka Button 🐨
			</button>
			{quokka && (
				<img
					className="border-color-[#73d9b0] mt-2 max-h-96 min-h-[24rem] rounded-md transition-all"
					style={{ border: "3px solid #73d9b0" }}
					src={quokka}
					alt="Random Quokka"
					onLoad={handleImageLoad}
				/>
			)}
		</div>
	);
};

export default RandomQuokka;
