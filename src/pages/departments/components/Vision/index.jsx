import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";

import "./style.css";

const Vision = ({ value }) => {
	let value1 = value.About.vision;
	let value2 = value.About.Mission;

	return (
		<div className="pb-10 mt-10">
			<div className="vision-hold p-10 flex justify-center">
				<h2 className="vision-title text-center">Vision and Mission</h2>
			</div>

			<div className="vision-content my-10 md:mx-20 mx-5 p-5">
				<h2 className="vision-heading text-2xl px-20 py-5 text-500">Vision</h2>
				{value1.map((e) => {
					return (
						<div className="flex align-center p-2 my-3">
							<div>
								<MdOutlineTravelExplore className="text-5xl mx-5" />
							</div>
							<p className="text-justify mr-3">{e.point}</p>
						</div>
					);
				})}
				<h2 className="vision-heading text-2xl px-20 py-5 text-500">Mission</h2>
				{value2.map((e) => {
					return (
						<div className="flex align-center p-2 my-3">
							<div>
								<MdOutlineTravelExplore className="text-5xl mx-5" />
							</div>
							<p className="text-justify mr-3">{e.point}</p>
						</div>
					);
				})}

				{/* <div className="flex p-2 my-3">
				<SiReasonstudios className="text-5xl  mx-5" />
				  <p>
				    {value.vision.point2}
				  </p>
				</div>
				<div className="flex p-2 my-3">
			 	<BsBookHalf className="text-5xl mx-5" />
				  <p>
				  {value.vision.point3}
				  </p>
				</div>
				<div className="flex p-2 my-3">
				<RiTeamFill className="text-5xl mx-5" />
				  <p>
				  To transform attitude, values, priorities by changing mindset
					and instill positive outlook for socially conscious intellectual
					development.
				  </p>
				</div>
				<div className="flex p-2 my-3">
				<MdOutlineTravelExplore className="text-5xl mx-5" />
				  <p>
				  Incubate, apply and spread innovative ideas to evolve the
					department as a Centre of excellence in thrust areas.
				  </p>
				</div> */}
			</div>
		</div>
	);
};

export default Vision;
