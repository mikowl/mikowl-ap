import React, { useState } from "react";
import useUniqueId from "../utils/useUniqueId";

type TooltipProps = {
	content: string;
	children: React.ReactElement;
};

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
	const [show, setShow] = useState(false);
	const tooltipId = useUniqueId("tooltip");

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
			{children}
			{show && (
				<span className="tooltip-content" id={tooltipId} role="tooltip">
					{content}
				</span>
			)}
		</span>
	);
};

export default Tooltip;
