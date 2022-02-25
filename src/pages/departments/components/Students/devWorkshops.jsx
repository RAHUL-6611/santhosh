import React from "react";

export default function DevWorkshops() {
	return (
		<div>
			{[1, 2, 3, 4, 5].map(() => {
				return (
					<div className="flex">
						<div className="DevCard"></div>
					</div>
				);
			})}
		</div>
	);
}
