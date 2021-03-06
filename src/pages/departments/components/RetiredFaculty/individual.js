import React from "react";

import "./style.css";

export default function Individual({ name, image, changeState }) {
	return (
		<div>
			<div className="single-faculty__container">
				<div
					onClick={() => {
						changeState(true);
					}}
					style={{ cursor: "pointer" }}
				>
					Back
				</div>

				<div className="single-faculty__profile">
					<div className="profile__left">
						<div className="profile__image">
							<img src={image} alt="" />
						</div>
						<div className="profile__name">
							<h1>{name}</h1>
							<h2>Dr. K. Sathiyamurthy</h2>
							<h3>Associate Professor</h3>
							<h3>B.E., M.Tech., Ph.D</h3>
						</div>
						<br />
					</div>
					<div className="profile__right">
						<div className="contact">
							<ul className="phone">
								<li>
									<strong>Phone</strong> 2655281
								</li>
								<li>
									<strong> Email</strong> sathiyamurthyk@pec.edu
								</li>
								<li>
									<strong>Extension</strong> 472
								</li>
							</ul>
							<ul className="social-media">
								<a href="">
									<img
										src="https://cms.pec.edu/img/linkedin-brands.svg "
										alt=""
									/>
								</a>
								<a href="">
									<img
										src="https://cms.pec.edu/img/facebook-square-brands.svg "
										alt=""
									/>
								</a>
								<a href="">
									<img
										src="https://cms.pec.edu/img/twitter-brands.svg"
										alt=""
									/>
								</a>
								<a href="">
									<img src="https://cms.pec.edu/img/globe-solid.svg" alt="" />
								</a>
							</ul>
						</div>
					</div>
				</div>

				<div className="single-faculty__intro">
					<div className="grid-container">
						<div className="first">
							<div className="spcl">
								<span>Specialization</span>
								<p>Machine Learning</p>
							</div>
						</div>
						<div className="second">
							<div className="alma">
								<span>Alma Mater</span>
								<p>
									Ph.D- Anna university,2012;
									<br />
									M.Tech - Pondicherry University, 2000;
									<br />
									B.Tech-Madras University,1999;
									<br />
								</p>
							</div>
						</div>
						<div className="third">
							<div className="dob">
								<span>Date of Birth</span>
								<p>03 March</p>
							</div>
							<div className="interest">
								<span>Interest</span>
								<p>Playing Badminton and Reading Books</p>
							</div>
						</div>
						<div className="fourth">
							<div className="research">
								<span> Current Research</span>
								<p>Machine Learning and Augmented Reality</p>
							</div>
							<div className="project">
								<span>Projects and Activities</span>
								<p>
									PIPDIC ERP Consultancy Principal Investigator for UGC ???
									Research Project Titled ???Design of Dynamic Health Risk
									Prediction model Through Internet-of-Things???
								</p>
							</div>
							<div className="student">
								<span>Students</span>
								<p>
									Vijayaprabakaran ( 2017 -) Kodavali Lakshmi Narayana (2018-)
								</p>
							</div>
						</div>
						<div className="fifth">
							<div className="pub">Publications</div>
							<div className="publication">
								<div className="journals">
									<span>Journals</span>
									<ul>
										<li>
											Vijayaprabakaran K, Sathiyamurthy K, Video-Based Human
											Activity Recognition for Elderly using Convolutional
											Neural Network, International Journal of Advanced
											Pervasive and Ubiquitous Computing (IJAPUC), Vol-12,
											Issue-1, pp.36-48, 2020.
										</li>
										<li>
											{" "}
											Vijayaprabakaran K, Sathiyamurthy K, Towards activation
											function search for long short-term model network: A
											differential evolution based approach, ournal of King Saud
											University ???Computer and Information Sciences, Elsevier,
											2020 Vijayaprabakaran K, Ponniamma, Sathiyamurthy
											K,Semantic Based Security for Health Data over Sensor
											Network,International Journal of Future Generation
											Communication and Networking, Vol. 13, No. 2, 2020, pp.
											673-688
										</li>
									</ul>
								</div>
								<div className="conference">
									<span>Conferences</span>
									<ul>
										<li>
											Vijayaprabakaran K, Sathiyamurthy K, A Framework for
											Semantic Annotation and Mapping of Sensor Data Streams
											Based on Multiple Linear Regression,Proceedings of
											International Conference on Soft Computing and Signal
											Processing (ICSCSP-2019),ISBN 2194-5357.
										</li>
										<li>
											{" "}
											K.Lakshmi Narayana, S.Priyanga, Dr.K.Sathiyamurthy,
											"Improved Framework for e-Healthcare Based on Blockchain
											and Fog Computing" , AICTE Sponsored International
											Conference on Recent Trends in IoT and Blockchain
											(ICRTIB-2019), GIET University, Gunupur, 2019, pp. 27,
											ISBN: 978-93-5391-198-0
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
