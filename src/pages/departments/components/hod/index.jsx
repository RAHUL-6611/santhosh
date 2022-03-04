import React from "react";

import "./style.css";
// import { getImageUrl } from "../../../../config";
import { Link } from "react-router-dom";

export default function HodCard({ value }) {
	const hod = value.About.Hod;

	return (
		<div className="hod-card-cont">
			<div className="hod-card__container">
				<div className="hod-card__parts">
					<img src={hod.img} alt="" />
					{console.log(hod.img)}
				</div>
				<div className="hod-card__parts hod-card__parts--fill">
					<h4
						className="text-2xl"
						style={{ "font-size": "23px", "font-weight": "700" }}
					>
						{hod.name}
					</h4>
					<h6 className="hod-card-title">{hod.designation}</h6>
					{/* <p>
						{hod.content}
					</p> */}
					<Link
						to={`${value.basePath}/hod`}
						style={{ textDecoration: "none", background: "none" }}
					>
						<button className="Hod-message">HOD message</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
