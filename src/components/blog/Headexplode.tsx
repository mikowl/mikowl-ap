const Headexplode = ({ children }: { children: React.ReactNode }) => {
	// returns a button, when clicked shows an emoji of a head exploding
	return (
		<button
			onClick={() => {
				console.log("🤯");
			}}
		>
			{children}
		</button>
	);
};

export default Headexplode;
