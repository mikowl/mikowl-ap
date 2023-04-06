import { useRef } from "react";

let idCounter = 0;

const useUniqueId = (prefix = "id") => {
	const idRef = useRef(`${prefix}-${++idCounter}`);
	return idRef.current;
};

export default useUniqueId;
