import React from "react";
import { getImageUrl } from "../../config";
import "./style2.css";
const Chance = () => {
	return (
		<div className="hod_body">
			<h1>chancellor's Message</h1>
			<div class="hod_container">
				<div class="profile">
					<div class="image">
						<img src={getImageUrl("chancellor.jpg")} alt="" />
					</div>
					<div class="content">
						<p class="name">Dr. Tamilisai Soundararajan</p>
						<div>
							<span>
								<i class="fas fa-phone-alt"></i>
							</span>
							<span class="number">94439 58140</span>
						</div>
						<div>
							<span>
								<i class="fas fa-envelope"></i>
							</span>
							<span class="email"> chancellor.cse@pec.edu</span>
						</div>
					</div>
				</div>
				<div class="right-box">
					<div class="msg">
						The department aims at providing high quality education to students
						through the latest in computer technology to enable them to
						undertake careers in the Information Technology field, pursue
						advanced studies abroad and take up Entrepreneurship.The department
						offers B.Tech. (CSE), M.Tech. (Distributed Computing), M.Tech.
						(Information Security), MCA and Ph.D. programmes. In order to
						maintain the standard of education, the department constantly
						upgrades the academic syllabi so as to keep the students well
						trained to deal with the changing trends in the field of Computer
						Science and Engineering. The department places emphasis on
						Distributed and Parallel Computing, Information Security, Internet
						of Things, Embedded Systems, Natural Language Processing
						Technologies, Artificial Intelligence, Machine Learning, Data Mining
						and Data Analytics and several other recent topics.
						<br />
						The curriculum of all courses are designed in such a way so as to
						enable students to carry out major and minor projects in leading
						industries/institutions, besides their regular classes and seminars.
						The students of the department have been placed in major companies
						like TCS, HCL, Broadcom, CTS, Infosys, SAP Labs, SAPIENT, Aspire
						Systems, Wipro Systems, ARICENT, Mbit wireless technologies, L&T
						Infotech etc. The Department regularly organizes a series of
						lectures from academicians and professionals of the highest repute,
						which lays importance on the latest innovative technologies in the
						field of Computer Science and Engineering. With our vision and
						mission, we strive to impart quality education to its pupils,
						thereby enabling them to stand out as individuals competent in the
						domain.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chance;
