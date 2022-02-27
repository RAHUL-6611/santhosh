import React from "react";

import "./style.css";

// import img from "./college_img.jpg";

export default function DevWorkshops() {
	return (
		<div className="devcardHold my-10">
			{[1, 2, 3, 5].map((e) => {
				return (
						<div className="DevCard col-2" key={e} style={{"background" : `url($})`}}>
							<div className="devback bg-red-100">
								<div className="innerdev">
									<div className="innerdev1">
									     
									</div>
									<div className="innerdev2">
										
									</div>
								</div>
							</div>
						</div>
				);
			})}
		</div>
	);
}
