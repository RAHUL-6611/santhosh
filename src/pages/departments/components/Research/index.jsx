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
							<div className="flex">
								<div className="px-10 py-5 research-boxxx">
									<h2>{index + 1}</h2>
									<h3>{e.name}</h3>
									<br />
									<p className="R-para p-10">{e.longContent}</p>
								</div>
								<div>
									<img className="imgg" src={e.img} alt="" />
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
