import React from "react";

import img1 from "../../../committees/download.png";

const index = () => {
	return (
		<div className="departmentcommittees flex w-full min-h-[500px] flex-col bg-slate-200 justify-center items-center">
			<div className="main-card-here flex p-20 text-center">
				<p className="p-4 bg-blue-100 shadow-2xl text-3xl">
					Departments and committees
				</p>
			</div>

			<div className="big-four-committess flex flex-wrap">
				<div className="committee flex-0.5 mx-4 my-2 mb-10 p-8 shadow-2xl">
					<div className="committee name py-4 ml-4 text-2xl">
						Google developer Club
					</div>
					<img src={img1} alt="" />
				</div>
				<div className="committee flex-0.5 mx-4 my-2 mb-10 p-8 shadow-2xl">
					<div className="committee name py-4 ml-4 text-2xl">
						Google developer Club
					</div>
					<img src={img1} alt="" />
				</div>
				<div className="committee flex-0.5 mx-4 my-2 mb-10 p-8 shadow-2xl">
					<div className="committee name py-4 ml-4 text-2xl">
						Google developer Club
					</div>
					<img src={img1} alt="" />
				</div>
				<div className="committee flex-0.5 mx-4 my-2 mb-10 p-8 shadow-2xl">
					<div className="committee name py-4 ml-4 text-2xl">
						Google developer Club
					</div>
					<img src={img1} alt="" />
				</div>
			</div>
		</div>
	);
};

export default index;
