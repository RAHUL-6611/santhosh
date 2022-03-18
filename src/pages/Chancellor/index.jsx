import React, { useEffect } from "react";
import Header from "../../components/Header";
import { getImageUrl } from "../../config";

import "./ChancellorMessage.css";

function ChancellorMessage() {
	useEffect(() => {
		window.scroll(0, 0);
	});

	return (
		<section className="chancellor-message__container">
			<Header />
			<div className="chancellor-message">
				<h1 className="chancellor-message__title">Chancellor's Message</h1>
				<div className="chancellor-message__content">
					<div className="chancellor-message__head mr-2">
						<img
							className="chancellor-message__img"
							src={getImageUrl("chancellor.jpg")}
							alt=""
						/>
						<p className="chancellor-message__name">
							<b>Dr.Tamilisai Soundararajan</b>
						</p>
						<p>Hon'ble Lt. Governor of Puducherry.</p>
						<p>Chancellor</p>
					</div>
					<div className="chancellor-message__body">
						<p>
						Puducherry Technological University (PTU) has the distinction of transcending into the first State University of the Union Territory of Puducherry from its beginning as Pondicherry Engineering College (PEC) and blossoming into college of repute. It is indeed an important milestone in the history of technical education. Perunthalaivar Kamarajar Institute of Engineering and Technology (PKIET), Karaikal established in the year 2007 is currently a constituent college of PTU.

						</p>

						<p>
							PTU in its earlier form of PEC always strived to achieve academic excellence by providing high quality technical education. The contribution of PTU has been immense especially towards the upliftment of the socio-economic status of Puducherry as 90% of the outgoing students are placed in reputed organizations onshore and offshore. I foresee Puducherry Technological University (PTU) as a platform where new courses are introduced to meet the global demands by consistently raising the technical education standards besides pursuing socially relevant research. In addition to imparting knowledge, honing skills, developing research acumen Puducherry Technological University (PTU) should ensure that the future generation, the backbone of India emerges as good human beings with values, ethics and integrity. As Martin Luther King rightly points out in his quotation, "The function of education is to teach one to think Intensely and to think critically. Intelligence plus character - that is the goal of true education".

						</p>

						<p>
							It is my dream that the students of PTU emerge as ambassadors who would spatially position Puducherry as an educational hub of high quality on the global map.
						</p>

						<p>
                        My best wishes to the entire team of Puducherry Technological University in all their future endeavours!
						</p>

						
					</div>
				</div>
			</div>
		</section>
	);
}

export default ChancellorMessage;
