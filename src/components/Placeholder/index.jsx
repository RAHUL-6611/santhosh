import React from "react";

import "./Placeholder.css";

function Placeholder(props) {
	const { className, ...rest } = props;
	return <div {...rest} className={`placeholder ${className ?? ""}`} />;
}

export default Placeholder;
