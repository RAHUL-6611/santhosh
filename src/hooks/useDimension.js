import { useEffect, useState } from "react";

function useDimension() {
	const [dimension, setDimension] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		function setNewDimension() {
			setDimension({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", setNewDimension);
		return () => window.removeEventListener("resize", setNewDimension);
	}, []);

	return { dimension, setDimension };
}

export default useDimension;
