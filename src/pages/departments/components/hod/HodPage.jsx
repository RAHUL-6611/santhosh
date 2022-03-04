import React from "react";
import "./style2.css";

const HodPage = ({ value }) => {
	const hod = value.About.Hod;
	return (
		// <div className="hod_body">
		// 	<h1 className="h1tag">HOD's Message</h1>
		// 	<div className="hod_container">
		// 		<div className="profile">
		// 			<div className="image">
		// 				<img src={hod.img} alt="" />
		// 			</div>
		// 			<div className="content">
		// 				<p className="name">{hod.name}</p>
		// 				<div>
		// 					<span>
		// 						<i className="fas fa-phone-alt"></i>
		// 					</span>
		// 					<span className="number">{hod.phnNo}</span>
		// 				</div>
		// 				<div>
		// 					<span>
		// 						<i className="fas fa-envelope"></i>
		// 					</span>
		// 					<span className="email">{hod.email}</span>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="right-box">
		// 			<div className="msg">{hod.content}</div>
		// 		</div>
		// 	</div>
		// 	</div>
		<section className="chancellor-message__container">
			<div className="chancellor-message">
				<h1 className="chancellor-message__title">HOD's Message</h1>
				<div className="chancellor-message__content">
					<div className="chancellor-message__head mr-2">
						<img className="chancellor-message__img" src={hod.img} alt="" />
						<p className="chancellor-message__name">
							<b>{hod.name}</b>
						</p>
						<p>{hod.phnNo}</p>
						<p>{hod.email}</p>
					</div>
					<div className="chancellor-message__body">
						<p> {hod.content}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HodPage;
