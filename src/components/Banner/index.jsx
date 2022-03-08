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
		dimension: { width, height },
	} = useDimention();

	let sliderHeight = height;

	if (width < 430) {
		sliderHeight *= 0.4;
	} else if (width < 600) {
		sliderHeight *= 0.5;
	} else if (width < 900) {
		sliderHeight *= 0.6;
	} else {
		sliderHeight *= 0.8;
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
				/>
			</div>
		</div>
	);
}

export default Banner;
