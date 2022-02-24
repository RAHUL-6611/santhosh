import React from "react";

import "./style.css";
import { getImageUrl } from "../../../../config";

export default function HodCard({ value }) {
 
	value = value.About.Hod

	return (
		<div className="hod-card-cont">
			<div className="hod-card__container">
				<div className="hod-card__parts">
					<img src={value.img} alt="" />
					{console.log(value.img)}
				</div>
				<div className="hod-card__parts hod-card__parts--fill">
					<h4 className="text-2xl" style={{"font-size" : "23px", "font-weight" : "700"}}>{value.name}</h4>
					<h6 className="hod-card-title">{value.Designation}</h6>
					{/* <p>
						{value.content}
					</p> */}
					<button className="Hod-message">HOD message</button>
				</div>

			</div>
		</div>
	);
}
