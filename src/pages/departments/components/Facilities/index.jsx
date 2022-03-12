import React from "react";

import s from "../../Cse/facility/DC1.jpg"

const Facilities = ({ value }) => {
	let facility = value.facilities;



	return (
		<div className="flex w-full bg-grey flex-col px-20 pt-10 justify-center items-center">
			<div className="block sm:grid sm:grid-cols-2  md:flex md:flex-col justify-center items-center">
				{facility.map((e, index) => {
					return (
						<>
						{
						(index %2 === 0) ?
						   <div key={e.name} className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
						       <FacilityIndividual value={e} />
						   </div>
						   :
						   <div key={e.name} className="fac block md:flex md:flex-row justify-around py-10 ">
						       <FacilityIndividual value={e} />
						   </div>
						}
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Facilities;


let FacilityIndividual = ({ value }) => {
	return (
		<>
		 <img src={""} className="p-10 Facility-img" alt="" />
		 {console.log(typeof value.img)}
		 <div className="details flex flex-col md:md:w-1/2 mx-5 ">
		 	<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
		 		<h3 className="text-3xl">{value.name}</h3>
		 	</div>
		 	<div className="details_of_fac text-lg text-left text-justify pt-5">
		 		{value.content}
		 	</div>
		 </div>
		</>
	)
}