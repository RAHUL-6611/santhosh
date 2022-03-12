import React from "react";
import { getImageUrl } from "../../../../config";

import "./ResearchPard.css";

export default function Research({ value }) {
	return (
		<div class="containerr p-10 block lg:grid lg:grid-cols-2 gap-7">
			{value.Research.map((e, index) => {
				return (
					<div className="">
						<div class="boxx flex">
							<>
							  {
								  (index %2 === 0) ?
								         <div className="flex flex-row-reverse">
								            <ResearchInner value={e} index={index} />
							             </div>
										 :
										 <div className="flex">
							            	<ResearchInner value={e} index={index} />
							             </div>
							  }
							</>
						</div>
					</div>
				);
			})}
		</div>
	);
}

let ResearchInner = ({ value, index }) => {
	return(
		<>
		<div className="px-10 py-5 research-boxxx ">
			<h2>{index + 1}</h2>
			<h3>{value.name}</h3>
			<br />
			<p className="R-para p-1">{value.longContent}</p>
		</div>
		<div style={{"width" : "200px"}}>
			<img className="imgg" src={value.img} alt="" />
		</div>
		</>
	)
}