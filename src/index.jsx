import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<SWRConfig
			value={{
				refreshInterval: 10 * 1000,
			}}
		>
			<App />
		</SWRConfig>
	</React.StrictMode>,
	document.getElementById("root")
);
