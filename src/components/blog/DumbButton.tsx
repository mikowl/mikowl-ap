import { useRef, useState } from "react";

const DumbButton = () => {
	const [count, setCount] = useState(0);
	const btnRef = useRef<HTMLButtonElement>(null);
	const generateRandomHexColor = () =>
		`#${Math.floor(Math.random() * 0xffffff)
			.toString(16)
			.padEnd(6, "0")}`;

	const handleClick = () => {
		if (btnRef.current === null) return;
		setCount(c => c + 1);
		if (count >= 9) {
			btnRef.current.style.transform = `translate(45px, 10px) scale(1.5)`;
			setCount(10);
			return;
		}
		btnRef.current.style.backgroundColor = generateRandomHexColor();
		const screenWidth = window.innerWidth - 240;
		const randomX = Math.floor(Math.random() * screenWidth);
		const randomY = Math.floor(Math.random() * 50);
		const randomRotate = Math.floor(Math.random() * 60) - 30;

		btnRef.current.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
	};

	return (
		<button
			className="btn transition-all duration-500 ease-in-out"
			style={{
				transitionTimingFunction: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
			}}
			ref={btnRef}
			onClick={handleClick}
		>
			{count < 10 ? `Click me! ${count}` : "You win! 🎉"}
		</button>
	);
};

export default DumbButton;
