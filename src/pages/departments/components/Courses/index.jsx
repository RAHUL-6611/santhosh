import React from "react";

import "./CANDCURR.css";

export default function Courses({ value }) {
	return (
		<div className="course">
			<div className="ccParent">
				{value.curriculum.map((c) => {
					return (
						<div className="ccCard">
							<h2 className="cctitle">{c.name}</h2>
							<p>{c.desc}</p>
							<div className="text-center pt-5" style={{ marginTop: "auto" }}>
								<a href={`${c.syllabusPdfLink}`} className="cc-see-more">
									Download Syllabus
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
