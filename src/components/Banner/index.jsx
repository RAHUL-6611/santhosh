import React, { useState, useEffect } from "react";
import { getImageUrl } from "../../config";
import "./Banner.css";
import LandingPageCarousel from "../LandingPageCarousel";
import SimpleImageSlider from "react-simple-image-slider";

import useDimention from "../../hooks/useDimension";

import admin from "../LandingPageCarousel/PEC_admin_block.gif";
import screen1 from "../LandingPageCarousel/ptuInauguration_screen1.jpg";
import screen4 from "../LandingPageCarousel/ptuInauguration_screen4.jpg";
import audi from "../LandingPageCarousel/pec-auditorium.jpg";
import inaug from "../LandingPageCarousel/ptuInauguration.jpg";
import hands from "../LandingPageCarousel/ptuInauguration_vicePresSpeech.jpg";

const images = [
	{ url: getImageUrl("PEC_admin_block.gif") },
	{ url: getImageUrl("ptuInauguration_screen1.jpg") },
	{ url: getImageUrl("ptuInauguration_screen4.jpg") },
	{ url: getImageUrl("pec-auditorium.jpg") },
	{ url: getImageUrl("ptuInauguration.jpg") },
	{ url: getImageUrl("ptuInauguration_vicePresSpeech.jpg") },
];
// const images = [
// 	{ url: admin },
// 	{ url: screen1 },
// 	{ url: screen4 },
// 	{ url: audi },
// 	{ url: inaug },
// 	{ url: hands },
// ];

function Banner() {
	const {
		dimension: { width },
	} = useDimention();

	return (
		<div>
			<div className="image_gallery">
				<SimpleImageSlider
					width={width}
					height={500}
					images={images}
					showBullets={true}
					showNavs={true}
					autoPlay={true}
					navStyle={2}
				/>
			</div>
		</div>
	);
}

export default Banner;
