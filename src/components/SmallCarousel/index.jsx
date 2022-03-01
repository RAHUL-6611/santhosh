import React, { useRef } from "react";

import "./SmallCarousel.css";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { getImageUrl } from "../../config";

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
						path="chancellor"
						/>
					<ChancellorCard
						img={getImageUrl("pro chancellor.jpg")}
						// desig="Revenue, Relief-cum-Rehabilitation, Transport, Education and Port"
						desig="Hon'ble Secretary (Education) to Govt. of Puducherry"
						name="Shri. Ashok Kumar, IAS"
						title="Pro Chancellor"
						path="pro-vc"
						/>
					<ChancellorCard
						img={getImageUrl("vc dr s mohan.jpg")}
						desig=""
						name="Dr.S Mohan"
						title="Vice Chancellor"
						path="vc"
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

const ChancellorCard = ({ img, name, title, desig ,path}) => {
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
					{/* <Link to={path}> */}
					{/* Read message */}
					{/* </Link> */}
				</p>
			</div>
		</div>
	);
};
