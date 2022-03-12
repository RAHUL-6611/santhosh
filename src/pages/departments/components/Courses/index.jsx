import React from "react";

import "./CANDCURR.css";

export default function Courses({ value }) {
	return (
		<div className="course">
			<div className="ccParent">
				{value.curriculum.map((c) => {
					return (
						<div className="ccCard shadow-xl">
							<h2 className="cctitle text-2xl font-bold text-red-800">{c.name}</h2>
							<p>{c.desc}</p>
							<div className="text-center pt-5 block" style={{ marginTop: "auto" }}>
								{
									c.syllabusPdfLink.map((e)=>{
										return(
											<>
											<div  className="download text-center my-3">
											   <a href={`${e.link}`} className="bg-red-700 text-white py-1 px-2">
									             Download {e.name} 
								               </a>
											</div>
											</>
										)
									})
								}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
