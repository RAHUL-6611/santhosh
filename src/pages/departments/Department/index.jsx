import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import DeptLandingPage from "../components/LandingPage";
import DeptHeader from "../components/DeptHead";
import Courses from "../components/Courses";
import Faculty from "../components/Faculty";
import Facilities from "../components/Facilities";
import Notices from "../components/Notice";
import Footer from "../../../components/Footer";
import Alumini from "../components/Alumini";
import Students from "../components/Students";
import RetiredFaculty from "../components/RetiredFaculty";
import MedalAwards from "../components/MedalAwards";
import Placements from "../components/Placements";
import UpcomingEvents from "../components/UpcomingEvents";
import DepartmentCommittees from "../components/DepartmentCommittees";
import Research from "../components/ReasearchPart";

import { API_BASE_URL } from "../../../config";

import "../components/LandingPage/style.css";
// import Index from "../components/Students/index.jsx";

export default function Department({ department }) {
	// console.log(department);
	const [faculty, setFaculty] = useState(null);
	const [sortedFaculty, setSortedFaculty] = useState(null);
	const [hodProfile, setHodProfile] = useState(null);
	// console.log(faculty)   

	useEffect(() => {
		async function fetchFaculty() {
			try {
				const response = await axios.get(
					API_BASE_URL +
						`Faculty.php?dept_name_or_faculty_id=${department.About.ShortName.toLowerCase()}&content=dept_name`
				);
				setFaculty(response.data);
			} catch (e) {
				console.error(e);
			}
		}
		fetchFaculty();
	}, [department.About.ShortName]);

	useEffect(() => {
		// uncomment when the is_hod property is added
		// const hodProfile = faculty?.find((f) => f.is_hod === 1);

		// comment this when the is_hod property added
		const hodProfile = faculty?.[0];

		const sortedFaculty = faculty?.reduce((acc, currentFaculty) => {
			if (acc[currentFaculty.post_tier.toLowerCase()]) {
				acc[currentFaculty.post_tier.toLowerCase()].push(currentFaculty);
			} else {
				acc[currentFaculty.post_tier.toLowerCase()] = [currentFaculty];
			}
			return acc;
		}, {});

		setHodProfile({
			...hodProfile,
			designation: `HOD ${department.About.ShortName} Department`,
			content:
				"HOD Cse Department Welcome to the department of Computer Science and Engineering. Here we will explore This is the message by cse hod.",
		});
		setSortedFaculty(sortedFaculty);
	}, [faculty, department.About.ShortName]);

	return (
		<>
			<DeptHeader name={department.About}/>
			<Routes>
			<Route
					path="/"
					element={
						<DeptLandingPage hodProfile={hodProfile} value={department} />
					}
				/>
				<Route
					path="/about"
					element={
						<DeptLandingPage hodProfile={hodProfile} value={department} />
					}
				/>
				<Route path="/faculty" element={<Faculty faculty={sortedFaculty} value={department}  />} />
				<Route path="/facilities" element={<Facilities value={department} />} />
				<Route path="/notices" element={<Notices />} value={department} />
				<Route path="/syllabus" element={<Courses />} value={department} />
				<Route path="/research" element={<Research />} value={department} />
				<Route path="/alumini" element={<Alumini />} value={department} />
				<Route path="/department-committees" element={<DepartmentCommittees />} value={department} />
				<Route path="/upcoming-events" element={<UpcomingEvents />} value={department} />
				<Route path="/students" element={<Students />} value={department} />
				<Route path="/retired-faculty" element={<RetiredFaculty />} value={department} />
				<Route path="/medal-awards" element={<MedalAwards />} value={department} />
				<Route path="/placements" element={<Placements />} value={department} />
			</Routes>
			<Footer />
		</>
	);
}
