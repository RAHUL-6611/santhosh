import React from "react";
import "./AboutPTU.css";

import { getImageUrl } from "../../config";

let carddesc = [
	{
		title: "Research",
		img: getImageUrl("mectro.jpg"),
		link:"https://research.pec.edu/"
	},
	{
		title: "Startups",
		img: getImageUrl("Startup.jpg"),
		link:"https://www.aicpecf.org/"
	},
	{
		title: "Placements",
		img: getImageUrl("placement.jpeg"),
		className: "about-part__card--placement",
		link:"https://tnp.pec.edu/"
	},
];

function AboutPTU() {
	return (
		<>
			<div className="about-ptu">
				<div className="about-ptu__sub-parts about-ptu__sub-parts--left">
					{/* <div className="quick-li">
                       <h7 className="quick-link">Quick Links</h7>
                    </div> */}
					<ol>
						{[
							getImageUrl("eie 2.jpg"),
							getImageUrl("me.jpg"),
							getImageUrl("civil.jpg"),
						].map((e, index) => {
							return (
								<div key={index}>
									<li>
										<img src={e} alt="" />
									</li>
									<hr />
								</div>
							);
						})}
					</ol>
				</div>
				<div className="about-ptu__sub-parts about-ptu__sub-parts--center">
					<div className="head-hold">
						<h6 className="about-head">About PTU</h6>
					</div>
					<p className="about-text">
						Puducherry Technological University (PTU), the first state
						University of Puducherry came into existence on 5 th September,
						2020, with the approval of UGC. Puducherry Technological University
						(PTU) was inaugurated by Shri. Venkaiah Naidu, Honourable Vice
						President, Government of India on 13 th September, 2021. Honourable
						Lieutenant Governor, Dr. Tamilisai Soundararajan is the Chancellor
						of Puducherry Technological University. Shri. Ashok Kumar is the
						Pro- chancellor and Dr. S.Mohan is the first Vice Chancellor of
						Puducherry Technological University (PTU). Perunthalaivar Kamarajar
						Institute of Engineering and Technology (PKIET), Karaikal is a
						constituent college of the University.
						<br />
						After having established for 36 years as a premier college for
						technical education in Puducherry, Pondicherry Engineering College
						has now been upgraded as Puducherry Technological University (PTU).
						Currently the University holds 144 th rank under the Engineering
						Category in the National Instiutional Ranking Framework (NIRF) 2021.
						Although the University is at its nascent stage, it offers
						undergraduate courses in nine branches of Engineering and Technology
						and twelve Post- graduate courses in Engineering, Computer
						Applications and Management besides Ph.D. in Engineering, Science
						and English.
					</p>
					<div className="about-img">
						<img src={getImageUrl("home.jpg")} alt="" />
					</div>
				</div>
				<div className="about-ptu__sub-parts about-ptu__sub-parts--right">
					{carddesc.map((e, index) => {
						return <Card key={index}  {...e} />;
					})}
				</div>
			</div>
		</>
	);
}

export default AboutPTU;

const Card = ({ title, img, className,link, ...rest }) => {
	let containerClass = "about-part__card";
	if (className) {
		containerClass += " " + className;
	}
	return (
		<a href={link}>
		<div {...rest} className={containerClass}>
			<div className="about-part__card-msg">
				<div className="about-part__card-msg-head">
					<h3>{title}</h3>
				</div>
				<div>
					<div className="about-part__card-img">
						<img src={img} alt="" />
					</div>
				</div>
			</div>
		</div>
		</a>
	);
};
