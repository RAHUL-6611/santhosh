import React, { useRef } from "react";

import "./SmallCarousel.css";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { getImageUrl } from "../../config";
import { Link } from "react-router-dom";

export default function SmallCarousel() {
	const scrollContainerRef = useRef();

	let moveLeft = () => {
		scrollContainerRef.current?.scrollBy(-180, 0);
	};

	let moveRight = () => {
		scrollContainerRef.current?.scrollBy(180, 0);
	};

	return (
		<div
			className="chancellor-card-cont hide-scrollbar"
			ref={scrollContainerRef}
		>
			<div className="btn btn--left">
				<button
					onClick={() => {
						moveLeft();
					}}
				>
					<BsArrowLeftCircle />
				</button>
			</div>
			<div className="slide-hold">
				<div className="slide">
					<ChancellorCard
						img={getImageUrl("chancellor.jpg")}
						desig="Hon'ble Lt. Governor of Puducherry"
						name="Dr. Tamilisai Soundararajan"
						title="Chancellor"
						path="chancellor-message"
					/>
					<ChancellorCard
						img={getImageUrl("pro chancellor.jpg")}
						// desig="Revenue, Relief-cum-Rehabilitation, Transport, Education and Port"
						desig="Secretary to Govt (Education) Govt. of Puducherry"
						name="Shri. Ashok Kumar, IAS"
						title="Pro-Chancellor"
					/>
					<ChancellorCard
						img={getImageUrl("vc dr s mohan.jpg")}
						desig="B.E., M.E., Ph.D., FNAE., FIE., FIPHE., FIWWA., FIASE."
						name="Dr.S Mohan"
						title="Vice-Chancellor"
						path="vc-message"
					/>
				</div>
			</div>
			<div className="btn btn--right">
				<button
					onClick={() => {
						moveRight();
					}}
				>
					<BsArrowRightCircle />
				</button>
			</div>
		</div>
	);
}

const ChancellorCard = ({ img, name, title, desig, path }) => {
	return (
		<div className="chancellor-card__container">
			<div className="chancellor-card__parts">
				<img src={img} alt="" />
			</div>
			<div className="chancellor-card__parts chancellor-card__parts--fill">
				<p className="chancellor-card__name">{name}</p>
				<p className="chancellor-card__desig">{desig}</p>
				<p className="chancellor-card__title">{title}</p>
				<p>
					{path && (
						<Link to={path} className="chancellor-card__parts-message-btn">
							Read message
						</Link>
					)}
				</p>
			</div>
		</div>
	);
};
