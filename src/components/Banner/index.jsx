import React from "react";
import { getImageUrl } from "../../config";
import "./Banner.css";

function Banner() {
	return (
		<div>
			<div className="image_gallery">
				<img
					className="image_gallery__img"
					src={getImageUrl("opt-landing-page2.jpg")}
					alt=""
				/>
				<div className="">
					<div className="image-gallery__text-box">
						<h6 className="drop-in-2">Welcome to</h6>
						<h1 className="drop-in-2">
							PUDUCHERRY
							<br />
							TECHNOLOGICAL
							<br />
							UNIVERSITY
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
