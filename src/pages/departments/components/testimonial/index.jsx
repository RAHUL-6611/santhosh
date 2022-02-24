import React from "react";
import { getImageUrl } from "../../../../config";

import "./style.css";

export default function Testimonial() {
	return (
		<div className="testimonial">
			<div className="testii">
				<h4 className="text-4xl">Testimonials</h4>
			</div>
			<div className="marq-hold">
				<marquee loop="true" className="mark">
					<div className="testi-cards-hold">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 6, 6, 7].map(() => {
							return (
								<div className="testi-card">
									<div className="card-text">
										{/* <pre className="testimonial-card-p">
											My time at Duke truly changed who
										</pre>
										<pre className="testimonial-card-p">
											I am and who I still want to become
										</pre>
										<pre className="testimonial-card-p">
											professionally and personally..
										</pre> */}
									</div>
									<div className="testimonial-card-img flex align-center">
										<div className="testimonial-img-pic">
											<div className="arrow"></div>
											<img
												src={getImageUrl("Unknown_person.jpg")}
												className="testi-img"
												alt=""
											/>
										</div>
										<div className="testimonial-img-text">
											<h5>Arul B</h5>
											<p>Btech CSE, 2007 batch.</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</marquee>
			</div>
		</div>
	);
}
