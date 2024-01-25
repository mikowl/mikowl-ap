import { useState } from "react";

const Accordion = ({
	heading,
	content,
}: {
	heading: string;
	content: string;
}) => {
	const [isActive, setIsActive] = useState(false);
	const panelId = heading.replace(/\s+/g, "-").toLowerCase();

	return (
		<div className="accordion">
			<h3>
				<button
					id={panelId}
					aria-controls={panelId}
					aria-expanded={isActive}
					onClick={() => setIsActive(!isActive)}
					className="accordion-toggle"
				>
					{heading}
					<i className={`chevron-down ${isActive ? "open" : ""}`} />
				</button>
			</h3>
			<p
				id={panelId}
				role="region"
				aria-labelledby={panelId}
				className={`accordion-content ${isActive ? "active" : ""}`}
			>
				{content}
			</p>
		</div>
	);
};

export default Accordion;
