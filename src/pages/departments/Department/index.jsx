import React from "react";
import { Routes, Route } from "react-router-dom";

import DeptLandingPage from "../components/LandingPage";
import DeptHeader from "../components/DeptHead";
import Courses from "../components/Courses";
import Faculty from "../components/Faculty";
import Facilities from "../components/Facilities";
import Research from "../components/ReasearchPart";
import Notices from "../components/Notice";
import Footer from "../../../components/Footer";
import Alumini from "../components/Alumini";

import "../components/LandingPage/style.css";

export default function Department({ department }) {

	return (
		<>
			<DeptHeader name={department.About}/>
			<Routes>
				<Route path="/" element={<DeptLandingPage value={department} />} />
				<Route path="/about" element={<DeptLandingPage value={department} />} />
				<Route path="/faculty" element={<Faculty value={department} />} />
				<Route path="/facilities" element={<Facilities value={department} />} />
				<Route path="/notices" element={<Notices />} value={department} />
				<Route path="/syllabus" element={<Courses />} value={department} />
				<Route path="/alumini" element={<Alumini />} value={department} />
				<Route path="/research" element={<Research />} value={department} />
			</Routes>
			<Footer />
		</>
	);
}
