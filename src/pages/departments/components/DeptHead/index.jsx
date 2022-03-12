import React from "react";

import { BiSearchAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../../../config";

export default function DeptHeader({ value }) {
	let toggle_nav = () => {
		document
			.getElementsByClassName("small-navbar")[0]
			.classList.toggle("hidden");
	};

	let go_top = () => {
		return window.scroll(0, 0);
	};

	return (
		<>
			<div className="deptHead">
				<div className="header_dept flex justify-around">
					<div className="title_dept flex items-center">
						<Link
							to="/"
							style={{ padding: 0, margin: 0, textDecoration: "none" }}
						>
							<img
								src={getImageUrl("PTU_Logo-color.png")}
								alt="aaaaaaaaaaaaa"
								className="img-top"
							/>
						</Link>
						<h3>{value.About.LongName}</h3>
					</div>
					<div className="searchbar_dept">
						<input type="text" placeholder="Search here" />
						<BiSearchAlt className="search_icon" />
					</div>
				</div>
				<div className="imgsec">
					<img src={value.About.DeptImg} alt="" />
				</div>
			</div>

			<div className="navbar_for_dept justify-right lg:justify-center">
				<div
					className="bars lg:hidden block"
					onClick={() => {
						toggle_nav();
					}}
				>
					<FaBars />
				</div>
				<div className="small-navbar hidden lg:hidden block">
					<Link
						to={value.basePath + "/about"}
						onClick={() => {
							toggle_nav();
							go_top();
						}}
					>
						<p>DEPARTMENT</p>
					</Link>
					<Link
						to={value.basePath + "/faculty"}
						onClick={() => {
							toggle_nav();
							go_top();
						}}
					>
						<p>FACULTY</p>
					</Link>
					<Link
						to={value.basePath + "/syllabus"}
						onClick={() => {
							toggle_nav();
							go_top();
						}}
					>
						<p>CURRICULUM</p>
					</Link>
					<Link
						to={value.basePath + "/research"}
						onClick={() => {
							toggle_nav();
							go_top();
						}}
					>
						<p>RESEARCH</p>
					</Link>
					<Link
						to={value.basePath + "/facilities"}
						onClick={() => {
							toggle_nav();
							go_top();
						}}
					>
						<p>FACILITIES</p>
					</Link>
				</div>
				<div className="nav-inside lg:flex lg:justify-center hidden">
					<Link
						to={value.basePath + "/about"}
						onClick={() => {
							go_top();
						}}
					>
						<p>DEPARTMENT</p>
					</Link>
					<Link
						to={value.basePath + "/faculty"}
						onClick={() => {
							go_top();
						}}
					>
						<p>FACULTY</p>
					</Link>
					<Link
						to={value.basePath + "/syllabus"}
						onClick={() => {
							go_top();
						}}
					>
						<p>CURRICULUM</p>
					</Link>
					<Link
						to={value.basePath + "/research"}
						onClick={() => {
							go_top();
						}}
					>
						<p>RESEARCH</p>
					</Link>
					<Link
						to={value.basePath + "/facilities"}
						onClick={() => {
							go_top();
						}}
					>
						<p>FACILITIES</p>
					</Link>
				</div>
			</div>
		</>
	);
}
