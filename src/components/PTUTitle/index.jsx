import React from "react";
import { FaBars } from "react-icons/fa";

import "./PTUTitle.css";
import "../SearchInput/SearchInput.css";
import SearchInput from "../SearchInput";
import { getImageUrl } from "../../config";
import {Link} from "react-router-dom"

function PTUTitle({ handleOnClick }) {
	return (
		<section className="ptu-title__container">
			<div className="ptu-title__logo-header">
				<Link to="/" style={{ textDecoration: 'none' ,width:"190px"}}>
				<img
					src={getImageUrl("logo.png")}
					className="ptu-title__logo"
					alt="Puducherry Technological University"
					/>
					</Link>
				<div className="ptu-title__collage-name-container">
					<h1 className="ptu-title__collage-name">
						<span className="ptu-title__first-letter">P</span>
						<span>UDUCHERRY</span>
						<span className="ptu-title__first-letter">T</span>
						<span>ECHNOLOGICAL</span>
						<span className="ptu-title__first-letter">U</span>
						<span>NIVERSITY</span>
					</h1>
					<h6 className="ptu-title__place">Puducherry, India</h6>
				</div>
			</div>
			<div className="ptu-title__toggle-btn-container">
				<button className="ptu-title__toggle-btn" onClick={handleOnClick}>
					<FaBars />
				</button>
			</div>
			<SearchInput className="desktop-search" />
		</section>
	);
}

export default PTUTitle;

export function PTUTitleContainer(props) {
	return <PTUTitle {...props} />;
}
