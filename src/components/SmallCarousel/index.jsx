import React, { useRef } from "react";

import "./SmallCarousel.css";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { getImageUrl } from "../../config";

export default function SmallCarousel() {
	const scrollContainerRef = useRef();

	let moveLeft = (e) => {
         console.log(e)
	};

	let moveRight = (e) => {
		console.log(e)

	};

	return (
		<div className="chancellor-part-top">
			<div className="chancellor-card-cont" ref={scrollContainerRef}>
			<div className="btn btn--left">
				<button
					onClick={(e) => {
						moveLeft(e);
					}}
				>
					<BsArrowLeftCircle />
				</button>
			</div>
			<div className="slide-hold">
				<div className="slide">
					<ChancellorCard
						img={getImageUrl("pro chancellor.jpg")}
						desig="Revenue, Relief-cum-Rehabilitation, Transport, Education and Port"
						name="Shri. Ashok Kumar, IAS"
						title="Pro Chancellor"
					/>
					<ChancellorCard
						img={getImageUrl("chancellor.jpg")}
						desig="Hon'ble Lt. Governor of Puducherry"
						name="Dr. Tamilisai Soundararajan"
						title="Chancellor"
					/>
					<ChancellorCard
						img={getImageUrl("vc dr s mohan.jpg")}
						desig="Vice Chancellor"
						name="Dr.S Mohan"
						title="Vice Chancellor"
					/>
				</div>
			</div>
			<div className="btn btn--right">
				<button
					onClick={(e) => {
						moveRight(e);
					}}
				>
					<BsArrowRightCircle />
				</button>
			</div>
		</div>
		</div>
	);
}

const ChancellorCard = ({ img, name, title, desig }) => {
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
					<a href="#">Read message</a>
				</p>
			</div>
		</div>
	);
};
