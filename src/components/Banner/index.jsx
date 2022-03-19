import React, { useState, useEffect } from "react";
import { FILE_BASE_URL, getImageUrl } from "../../config";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import useFetch from "../../hooks/useFetch";

import "./Banner.css";

// eslint-disable-next-line no-unused-vars
const localImages = [
	{ url: getImageUrl("PEC_admin_block.gif") },
	{ url: getImageUrl("ptuInauguration_screen1.jpg") },
	{ url: getImageUrl("ptuInauguration_screen4.jpg") },
	{ url: getImageUrl("pec-auditorium.jpg") },
	{ url: getImageUrl("ptuInauguration.jpg") },
	{ url: getImageUrl("ptuInauguration_vicePresSpeech.jpg") },
];

const firstImageSlide = [
	<div
		className="banner__first-slide"
		style={{ backgroundImage: `url(${getImageUrl("opt-landing-page2.jpg")})` }}
	>
		<div>
			<div className="banner__text-box">
				<h6>Welcome to</h6>
				<h1>
					PUDUCHERRY
					<br />
					TECHNOLOGICAL
					<br />
					UNIVERSITY
				</h1>
			</div>
		</div>
	</div>,
];

function Banner() {
	const { data } = useFetch("Images.php?category=home_page_slider");

	let [slides, setSlides] = useState(firstImageSlide);

	useEffect(() => {
		if (data) {
			const newSlides = firstImageSlide.concat(
				data.map((d) => (
					<div className="image-gallery__img-container">
						<img
							src={`${FILE_BASE_URL}img_gallery/${d.img_name}`}
							className="image-gallery__img"
							alt=""
						/>
					</div>
				))
			);
			setSlides(newSlides);
		}
	}, [data]);

	console.log(slides);

	return (
		<div className="image-gallery">
			{slides.length === 1 ? (
				slides[0]
			) : (
				<AliceCarousel
					autoPlay
					autoPlayInterval={2500}
					infinite
					animationDuration={3000}
					items={slides}
				/>
			)}
		</div>
	);
}

export default Banner;
