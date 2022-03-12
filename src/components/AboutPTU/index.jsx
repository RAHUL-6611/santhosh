import React from "react";
import "./AboutPTU.css";

import { getImageUrl } from "../../config";

let carddesc = [
	{
		title: "Research",
		img: getImageUrl("mectro.jpg"),
		link: "https://research.pec.edu/",
	},
	{
		title: "Startups",
		img: getImageUrl("Startup.jpg"),
		link: "https://www.aicpecf.org/",
	},
	{
		title: "Placements",
		img: getImageUrl("placement.jpeg"),
		className: "about-part__card--placement",
		link: "https://tnp.pec.edu/",
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
						Puducherry Technological University (PTU) is the first state
						University of Union Territory of Puducherry. It seamlessly came into
						existence on 5<sup>th</sup> September 2020 upon the elevation of
						erstwhile Pondicherry Engineering College - PEC (established in the
						year 1985 under the 7<sup>th</sup> five-year plan) with the
						University status. PTU began its journey with a position of
						pre-eminence and rightly stands as one of the finest engineering
						schools offering Bachelors, Masters and Doctoral study programmes in
						the prominent disciplines of Engineering/Technology, Science,
						Management and Entrepreneurship. Highly qualified faculty, diverse
						student population from across the country, best-of-breed
						infrastructure and an expansive campus sprawling over 185.8 acres of
						luscious green landscape on the shores of tantalizing Bay of Bengal
						present a vibrant ecosystem for the pursuit of intellectual
						excellence. Thirty-six years on since its original inception, PTU
						has built a legacy for itself and stands in good stead in terms of
						discernible academic parameters. NIRF, MHRD, Govt. of India has
						ranked us at 144 under the category of engineering education. PTU
						alumni are spread far and wide across the globe holding eminent
						positions in top global Corporates, Universities and Civil Services.
						Some of them own successful enterprises in India and abroad. Such
						accomplishments stand testimony to the quality of education we have
						been offering from the classrooms of PTU.
					</p>
					<div>
						<img className="about-img" src={getImageUrl("home.jpg")} alt="" />
					</div>
				</div>
				<div className="about-ptu__sub-parts about-ptu__sub-parts--right">
					{carddesc.map((e, index) => {
						return <Card key={index} {...e} />;
					})}
				</div>
			</div>
		</>
	);
}

export default AboutPTU;

const Card = ({ title, img, className, link, ...rest }) => {
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
