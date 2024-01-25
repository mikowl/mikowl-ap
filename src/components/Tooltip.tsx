import React, { useState } from "react";

type TooltipProps = {
	content: string;
	children: React.ReactElement;
};

const Tooltip: React.FC<TooltipProps> = ({ content, title }) => {
	const [show, setShow] = useState(false);
	const tooltipId = title + "-tooltip";

	const handleMouseEnter = () => {
		setShow(true);
	};

	const handleMouseLeave = () => {
		setShow(false);
	};

	const handleFocus = () => {
		setShow(true);
	};

	const handleBlur = () => {
		setShow(false);
	};

	return (
		<span
			className="tooltip-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleFocus}
			onBlur={handleBlur}
			tabIndex={0}
			aria-describedby={tooltipId}
		>
			{title}
			{show && (
				<span className="tooltip-content" id={tooltipId} role="tooltip">
					{content}
				</span>
			)}
		</span>
	);
};

export default Tooltip;
