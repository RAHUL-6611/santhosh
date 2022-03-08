import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

import {
	API_BASE_URL,
	getImageUrl,
	getProfileImageUrl,
} from "../../../../config";

import "./style.css";

export default function Individual({ id, dept }) {
	const [profile, setProfile] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	useEffect(() => {
		async function fetchFaculty() {
			try {
				const response = await axios.get(
					API_BASE_URL +
						`Faculty.php?dept_name_or_faculty_id=${id}&content=faculty_id`
				);
				setProfile(response.data[0]);
			} catch (e) {
				console.error(e);
			}
		}
		fetchFaculty();
	}, [id]);

	let image = profile?.pp_file_name
		? getProfileImageUrl(profile.pp_file_name)
		: getImageUrl("Unknown_person.jpg");

	return (
		<div>
			<div className="single-faculty__container">
				<div>
					<button
						className="single-faculty__back-btn"
						onClick={() => navigate(-1)}
					>
						<IoMdArrowBack /> Back
					</button>
				</div>

				<div className="single-faculty__profile">
					<div class="profile__left">
						<div class="profile__image">
							<img src={image} alt="" />
						</div>
						<div class="profile__name">
							<h2>{profile?.faculty_name}</h2>
							<h4>{profile?.post_tier}</h4>
						</div>
						<br />
					</div>
					<div className="profile__right">
						<div className="contact">
							<ul className="phone">
								<li>
									<strong>Phone:</strong> {profile?.phn_no}
								</li>
								<li>
									<strong> Email:</strong> {profile?.email}
								</li>
								<li>
									<strong>Extension:</strong> {profile?.extension}
								</li>
							</ul>
							<ul className="social-media">
								<a href={profile?.linkedin}>
									<img
										src="https://cms.pec.edu/img/linkedin-brands.svg "
										alt=""
									/>
								</a>
								<a href={profile?.facebook}>
									<img
										src="https://cms.pec.edu/img/facebook-square-brands.svg "
										alt=""
									/>
								</a>
								<a href={profile?.twitter}>
									<img
										src="https://cms.pec.edu/img/twitter-brands.svg"
										alt=""
									/>
								</a>
								<a href={profile?.twitter}>
									<img src="https://cms.pec.edu/img/globe-solid.svg" alt="" />
								</a>
							</ul>
						</div>
					</div>
				</div>

				<div className="single-faculty__intro">
					<img
						src={getImageUrl("PTU_Logo_black_white.png")}
						alt=""
						className="single-faculty__intro-water-mark"
					/>
					<div className="grid-container">
						<div className="first">
							<div className="spcl">
								<span>Specialization</span>
								<p>{profile?.specialization}</p>
							</div>
						</div>
						<div className="second">
							<div className="alma">
								<span>Alma Mater</span>
								<p>{profile?.alma_mater}</p>
								{/* <p>
									Ph.D- Anna university,2012;
									<br />
									M.Tech - Pondicherry University, 2000;
									<br />
									B.Tech-Madras University,1999;
									<br />
								</p> */}
							</div>
						</div>
						<div className="third">
							<div className="dob">
								<span>Date of Birth</span>
								<p>{profile?.dob}</p>
							</div>
							<div className="interest">
								<span>Interest</span>
								<p>{profile?.interests}</p>
							</div>
						</div>
						<div className="fourth">
							<div className="research">
								<span> Current Research</span>
								{/* {(profile?.current_research.split("<br />")).map(elem=>
								(
									<p>{elem}</p>
								))} */}
								<p>{profile?.current_research}</p>
							</div>
							<div className="project">
								<span>Projects and Activities</span>
								<p>{profile?.projects}</p>
							</div>
							<div className="student">
								<span>Students</span>
								<p>{profile?.students}</p>
							</div>
						</div>
						<div className="fifth">
							<div className="pub">Publications</div>
							<div className="publication">
								<div className="journals">
									<span>Journals</span>
									<ul>
										{profile?.journals
											?.trim()
											.split("\n")
											.map((journal, id) => {
												if (journal !== null) {
													return <p key={id}>{journal} </p>;
												}
											})}
									</ul>
								</div>
								<div className="conference">
									<span>Conferences</span>
									<ul>
										{profile?.conference
											?.replace("<br />", " ")
											.split("\n")
											.map((con, id) => {
												// console.log(
												// 	profile?.conference
												// 		?.replace("<br />", " ")
												// 		.replace("\r", " ")
												// 		.split("\n")
												// );
												if (con !== null || con !== "  ") {
													return <p key={id}>{con}</p>;
												}
											})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
