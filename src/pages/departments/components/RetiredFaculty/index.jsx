import React, { useState } from "react";

import Individual from "./individual";

import { supportingStaff } from "./facultyProfilePAge";

export default function Faculty() {
	let [state, setState] = useState({ condition: true, name: "" });

	let changeState = (e, name, image) => {
		setState({ condition: e, name: name, image: image });
	};

	return (
		<>
			{state.condition ? (
				<FacultyParts changeState={changeState} />
			) : (
				<Individual
					name={state.name}
					image={state.image}
					changeState={changeState}
				/>
			)}
		</>
	);
}

function FacultyParts({ changeState }) {
	return (
		<>
			<FacultySingle
				Fname="Retired Faculty"
				changeState={changeState}
				data={supportingStaff}
			/>{" "}
		</>
	);
}

function FacultySingle({ Fname, data, changeState }) {
	let [state, setState] = useState(0);

	let name = data[state].name;
	let sub = data[state].Subject;
	let msg = data[state].email;
	let number = data[state].number;
	let image = data[state].img;

	return (
		<>
			<div className="faculty block md:grid md:grid-cols-7 py-20">
				<div className="big col-span-4">
					<div className="our-fac">{Fname}</div>
					<div className="big-in fac-info flex">
						<div className="big-img">
							<img
								style={{ width: "440px", height: "300px" }}
								src={image}
								alt=""
							/>
						</div>
						<div className="big-cont p-10">
							<p className="fac-name">{name}</p>
							{number === 0 ? (
								<p>Designation : {sub}</p>
							) : (
								<p>Specialization : {sub}</p>
							)}

							{number === 0 ? <p></p> : <p>Phone : {number}</p>}
							{msg === "" ? <p></p> : <p>Email : {msg}</p>}
							<div
								onClick={() => {
									changeState(false, name, image);
								}}
								style={{ cursor: "pointer" }}
							>
								view full profile
							</div>
						</div>
					</div>
				</div>
				<div className="small md:block flex  col-span-3 ml-4">
					{data.map((e, index) => {
						return (
							<div
								key={e.name + index}
								className="small-cards flex justify-left px-10 py-5"
								onClick={() => {
									setState(index);
								}}
							>
								<div className="parts1">
									<img className="faculty-img" src={e.img} alt="" />
								</div>
								<div className="parts2 px-5">
									<h5 className="fac-name2">{e.name}</h5>
									<h6>{e.Subject}</h6>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
