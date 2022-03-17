import React from "react";
import Carousel from "./carousel";

import "./carousel.css";

export default function CarouselHold() {
	return (
		<>
			<div className="carousel-hold">
				<h1 className="title uppercase">Departments</h1>
				<div>
					<Carousel />
				</div>
			</div>

			{/* <div className="div" id="">
          <h1 id="">Latest Research</h1>
            <div>
               <Carousel />
            </div>
        </div> */}
		</>
	);
}
