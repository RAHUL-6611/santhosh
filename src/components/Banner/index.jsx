import React from "react";
import { getImageUrl } from "../../config";
import "./Banner.css";
import SimpleImageSlider from "react-simple-image-slider";

import useDimention from "../../hooks/useDimension";

const images = [
	{ url: getImageUrl("PEC_admin_block.gif") },
	{ url: getImageUrl("ptuInauguration_screen1.jpg") },
	{ url: getImageUrl("ptuInauguration_screen4.jpg") },
	{ url: getImageUrl("pec-auditorium.jpg") },
	{ url: getImageUrl("ptuInauguration.jpg") },
	{ url: getImageUrl("ptuInauguration_vicePresSpeech.jpg") },
];

function Banner() {
	const {
		dimension: { width },
	} = useDimention();

	let sliderHeight = 550;

	if (width < 430) {
		sliderHeight = 300;
	} else if (width < 600) {
		sliderHeight = 400;
	} else if (width < 900) {
		sliderHeight = 500;
	}

	return (
		<div>
			<div className="image_gallery">
				<SimpleImageSlider
					className="my-slider"
					width={width}
					height={sliderHeight}
					images={images}
					showBullets={true}
					showNavs={true}
					autoPlay={true}
					navStyle={2}
					bgColor="#ebebeb"
				/>
			</div>
		</div>
	);
}

export default Banner;
