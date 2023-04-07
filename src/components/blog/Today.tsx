import { useEffect, useState } from "react";

const Today = () => {
	const [fact, setFact] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const API_URL = "http://numbersapi.com/";
	useEffect(() => {
		const todayUrl = `${API_URL}${new Date().getMonth()}${new Date().getDate()}/date`;
		setLoading(true);
		fetch("http://numbersapi.com/4/7/date")
			.then(res => res.text())
			.then(res => {
				setFact(res);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h2>Today's Fact</h2>
			{loading ? (
				<p>loading...</p>
			) : (
				<p>
					<em>{fact}</em>
				</p>
			)}
		</div>
	);
};

export default Today;
