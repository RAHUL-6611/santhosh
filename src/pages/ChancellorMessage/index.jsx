import React, { useEffect } from "react";
import Header from "../../components/Header";
import { getImageUrl, FILE_BASE_URL } from "../../config";

import "./ChancellorMessage.css";

function ChancellorMessage() {
	useEffect(() => {
		window.scroll(0, 0);
	});

	return (
		<section className="chancellor-message__container">
			<Header />
			<div className="chancellor-message">
				<h1 className="chancellor-message__title">VC's Message</h1>
				<div className="chancellor-message__content">
					<div style={{ backgroundColor: "brown" }}>
						<div className="chancellor-message__head">
							<img
								className="chancellor-message__img"
								src={getImageUrl("vc dr s mohan.jpg")}
								alt=""
							/>
							<p className="chancellor-message__name">
								<b>Dr.S Mohan</b>
							</p>
							<p className="chancellor-message__qualification">
								B.E., M.E., Ph.D., FNAE., FIE., FIPHE., FIWWA., FIASE.
							</p>
							<p className="chancellor-message__chancellor-title">
								Vice-Chancellor
							</p>
							<p>
								<a
									href={`${FILE_BASE_URL}VC_Full_Profile.pdf`}
									className="chancellor-card__parts-message-btn"
								>
									View Profile
								</a>
							</p>
						</div>
					</div>
					<div className="chancellor-message__body  ml-3">
						<p>
							Warm and Affectionate Greetings to all the Students, Faculty
							members, Research Scholars, Supporting staff, and all stakeholders
							who are part of the intellectual fraternity at Puducherry
							Technological University (PTU), Puducherry. This is the first year
							of academic journey towards to make this as a University of
							Excellence in Knowledge Creation as well as in Knowledge
							Dissemination, and during the last several years the Pondicherry
							Engineering College has attained many milestones and PTU is
							emerging as a most sought Technological University of quality
							learning with integrated academic programmes.
						</p>

						<p>
							The Puducherry Technological University is in the process of
							developing Vision- 2030 planned by different academic bodies and
							is working for academic expansion and diversification widening the
							academic canvass on horizontal and vertical dimensions. By now
							career in knowledge on the campus has been meeting the
							intellectual requirements of the society in the areas of
							engineering and technological education, management education,
							environmental and biological education, IT education, and Science
							education. Now the time is opportune and the stage is set to
							launch teacher education and teacher development programmes in
							line with the approval granted by the University Grants
							Commission.
						</p>

						<p>
							PTU is dedicated to provide congenial academic environment for
							nurturing the young minds to take on the challenges posed by
							globalization and advancements in different areas of knowledge. In
							consonance with the vision of country's top leadership as
							reflected in the National Education Policy (NEP) 2020, the
							university focuses on producing trained human resource which has
							extensive knowledge, modern skills, diverse abilities, leadership
							qualities, entrepreneurial abilities, and strong cultural and
							ethical values as guiding spirit. Importantly, the courses offered
							are very carefully designed keeping in view the functionality of
							output to bridge the gap between higher education and employment.
						</p>

						<p>
							The University plans to put in sustained efforts to create brand
							equity and offer leadership by way of differentiation in all its
							intellectual pursuits. Accordingly focus is on development of
							contemporary relevant curriculum; meeting and beating various
							benchmarks of quality assurance; development of a healthy academic
							governance structure; cutting edge curriculum management blended
							with updated research support across the globe are accorded top
							priority.
						</p>

						<p>
							The University would march ahead to attain its mission through a
							goal of blending contemporary knowledge with skills and values in
							true spirit to groom high calibre thinkers; morally upright and
							physically sound citizenry inspired with proactive approach to
							take up challenges confronting the present society and prove
							productive individuals in ever changing knowledge society. The
							core objective is to work for the uplift of the humanity at large.
						</p>

						<p>
							To be closely associated with other segments of society, the
							University is planning to execute Memoranda of Association for
							mutual benefit leading to the technological innovations and
							development as well as socio-economic development of the country.
							Towards social responsibility the University is planning to launch
							skill development centres in the campus or in the communes in the
							vicinity of the designated campus where the local youth will be
							equipped with skills in different crafts to make them employable
							to yield demographic dividend.
						</p>
						<p>
							With regards to campus development, the University struggles hard
							on different fronts. The land and infrastructure need to be
							transferred to the University. The development of the permanent
							Infrastructure for the University is under way. The master plan
							has been in the process of development and would get approved
							through all the bodies of the academic governance. With due
							support of all stakeholders, we are confident that in the near
							future the University will be operational with its permanent
							buildings. I have full trust in our faculty, supporting staff and
							students’ capabilities to make this University to reach greater
							heights. Dear Students, during your stay in the University your
							talent will be honed and you will be exposed to cutting edge and
							competitive environment by your zealous participation in the
							corporate life of this great alma mater. You will take a lead and
							outperform the rest.{" "}
						</p>
						<p>
							We as a University of Future is working on the following
							objectives to make this PTU as a world-class university.
						</p>
						<ul>
							<li>
								To bring in an eco-system of research orientation, and to make
								the University one of the finest in the World for research.
							</li>
							<li>
								To ensure that the sizeable portion of fund requirements come
								from Alumni and own corpus funds. This will restrict
								interference and bring independence to the way the University is
								being managed, for the purpose of promoting research.
							</li>
							<li>
								To ensure that the research is not just academic, but is useful
								to industry, through a proper, appropriate and effective
								industry-academy relationship to be fostered on a sustainable
								basis.
							</li>
							<li>
								To focus on employability of the students, with appropriate
								skill development, including soft skills etc.
							</li>
						</ul>
						<p>
							We are pursuing our vision to create most conducive ambience for
							the creation and dissemination of knowledge guided by innovative
							thinking, scientific enquiry, sublime human values, sustainable
							ecology and democratic ethos.
						</p>
						<p>
							“I have dedicated my whole life in the pursuit of excellence and
							my work here will attempt to achieve the same,”.
						</p>
						<p>
							“I’m optimistic of working towards leveraging a strong
							university–industry collaboration that will lead to a progressive
							relationship. I look forward to working with an outstanding team
							of faculty and staff from this university.”
						</p>
						<p>
							As we look to the future, one thing is certain - technology and
							knowledge will be key resources, most sought after within the
							country and around the world. Therefore, it is our paramount duty
							to help generate ideas that will benefit society, and to educate
							and train people to work in the fields where they will be valued
							for their specialized knowledge. Our acumen to research,
							communicate and solve issues is to be improved upon from time to
							time. To meet these challenges, we are undertaking alliances with
							research institutions, partnership with Government and other
							agencies. We are leaving no stone unturned to ensure the quality
							of our academic programs and excellence of our teaching, learning
							and research.
						</p>
						<p>
							Dear Students, during your stay in the University your talent will
							be honed and you will be exposed to cutting edge and competitive
							environment by your zealous participation in the corporate life of
							this great alma mater. You will take a lead and outperform the
							rest.
						</p>
						<p>
							Let us all work towards creating an environment of stimulating
							intellectual dialogue across disciplines and harvesting knowledge
							with a cutting-edge through high quality teaching, research, and
							extensions activities leading to the generation of responsible and
							intellectual students who would provide leadership, vision and
							direction to society.
						</p>
						<p>
							I take this opportunity to welcome all the stakeholders to this
							citadel of learning which provides multidisciplinary learning
							opportunities with on all round personality emphasis development.
							I am confident that the stay of any student or scholar or faculty
							or staff at Puducherry Technological University will be a
							rewarding journey.
						</p>
						<p>
							Looking forward for the cooperation and support of the
							Stakeholders of our Puducherry Technological University, and I
							wish you all success in your future endeavours.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ChancellorMessage;
