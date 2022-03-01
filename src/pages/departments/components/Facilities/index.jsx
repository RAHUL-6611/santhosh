import React from "react";

import { getImageUrl } from "../../../../config";

const Facilities = ({ value }) => {

	let facility = value.facilities

	return (
		<div className="flex w-full bg-grey flex-col px-20 pt-10 justify-center items-center">
			<div className="block sm:grid sm:grid-cols-2  md:flex md:flex-col justify-center items-center">
				{
					facility.map((e, index)=>{
						return (
							<>
			  <div key={e.name} className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
					<img
						src={getImageUrl("appl2.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2 mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">{e.name}</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						    {e.content}
						</div>
					</div>
				</div>
							</>
						)
					})
				} 
 					
			</div>
		</div>
	);
};

export default Facilities;
