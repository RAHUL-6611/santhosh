import React, { useState } from "react";

import Individual from "./individual";
import useQuery from "../../../../hooks/useQuery";

import {
	professors,
	associFacultyData,
	assisFacultyData,
	supportingStaff,
} from "./facultyProfilePage";
import { getImageUrl, getProfileImageUrl } from "../../../../config";
import Placeholder from "../../../../components/Placeholder";
import { Link } from "react-router-dom";

export default function Faculty({ faculty, value }) {
	const query = useQuery();
	// console.log(faculty);

	if (!faculty) {
		return <FacultySinglePlaceholder />;
	}

	const postTier = Object.keys(faculty);

	return (
		<>
			{!query.get("id") ? (
				postTier.map((tier) => {
					return <FacultySingle key={tier} Fname={tier} data={faculty[tier]} />;
				})
			) : (
				<Individual
					id={query.get("id")}
					dept={value.About.ShortName.toLowerCase()}
				/>
			)}
		</>
	);
}

function FacultyParts() {
	return (
		<>
			<FacultySingle Fname="Associate professors" data={associFacultyData} />
			<FacultySingle Fname="Professors" data={professors} />
			<FacultySingle Fname="Assistant professors" data={assisFacultyData} />
			<FacultySingle Fname="Supporting staff" data={supportingStaff} />
		</>
	);
}

function FacultySingle({ Fname, data }) {
	let [state, setState] = useState(0);

	let id = data[state].faculty_id;
	let name = data[state].faculty_name;
	let sub = data[state].specialization;
	let msg = data[state].email;
	let number = data[state].phn_no;
	let image = data[state].pp_file_name
		? getProfileImageUrl(data[state].pp_file_name)
		: getImageUrl("Unknown_person.jpg");

	return (
		<>
			<div className="faculty block md:grid md:grid-cols-7 py-20">
				<div className="big col-span-4">
					<div className="our-fac">{Fname}</div>
					<div className="big-in fac-info flex">
						<div className="big-img">
							<img
								// style={{ width: "300px", height: "300px" }}
								src={image}
								alt=""
							/>
						</div>
						<div className="big-cont flex flex-col p-10">
							<p className="fac-name">{name}</p>
							<p className="">
								<p>
								Qualification : 
								{name}
								</p>
								</p>
							{Fname.includes("supporting") ? (
								<p>Designation : {sub}</p>
							) : (
								<p>Specialization : {sub}</p>
							)}

							{Fname.includes("supporting") ? <p></p> : <p>Phone : {number}</p>}
							{msg === "" ? <p></p> : <p>Email : {msg}</p>}
							<div className="mt-auto single-faculty__back-btn w-3/4 pl-2">
								<Link
									to={`/cse/faculty?id=${id}`}
									className="faculty__view-link text-center capitalize"
								>
									<button>View Full Profile</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="small md:block flex  col-span-3 ml-4">
					{data.map((e, index) => {
						return (
							<div
								key={index}
								className="small-cards flex justify-left px-10 py-5"
								onClick={() => {
									setState(index);
								}}
							>
								<div className="parts1">
									<img
										className="faculty-img "
										src={
											e.pp_file_name
												? getProfileImageUrl(e.pp_file_name)
												: getImageUrl("default_avatar.jpg")
										}
										alt=""
									/>
								</div>
								<div className="parts2 px-5">
									<h5 className="fac-name2">{e.faculty_name}</h5>
									<h6>{e.specialization}</h6>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

// loader
function FacultySinglePlaceholder() {
	return (
		<div className="faculty block md:grid md:grid-cols-7 py-20">
			<div className="big col-span-4">
				<Placeholder className="w-full mb-8 our-fac--placeholder" />

				<div className="big-in big-in--placeholder fac-info flex">
					<div className="big-img">
						<Placeholder className="big-img--placeholder" />
					</div>
					<div className="big-cont p-10 flex flex-col big-cont--placeholder">
						<Placeholder className="fac-name--placeholder" />

						<Placeholder className="contact--placeholder" />

						<Placeholder className="contact--placeholder" />

						<Placeholder className="view-btn--placeholder" />
					</div>
				</div>
			</div>
			<div className="small md:block flex  col-span-3 ml-4">
				{[1, 2, 3].map((e, index) => {
					return (
						<div
							key={index}
							className="small-cards small-cards--placeholder flex justify-left px-10 py-5"
						>
							<div className="parts1">
								<Placeholder className="faculty-img--placeholder" />
							</div>
							<div className="parts2 px-5 w-full">
								<Placeholder className="contact--placeholder" />
								<Placeholder className="contact--placeholder" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
