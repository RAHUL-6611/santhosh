import React from "react";
import { Link } from "react-router-dom";

import "./Notice.css";
import "../../../../components/NewsPTU/NewsPTU.css";

let newsObj = [
	{
		topic: "CoE Announcement",
		byWhom: "Registar",
		message:
			"Classes will be conducted in offline mode with effect from 4.2.2022 except for First year B.Tech.",
	},
	{
		topic: "Examination",
		byWhom: "Examination wing",
		message:
			"Due to the persistent pandemic situation in the UT, all examinations are postponed and the new dates will be announced on this website later.",
	},
	{
		topic:
			"For the attention of the first year UG/PG students & Lateral Entry Students",
		byWhom: "Registar",
		message:
			"The Library & Information Centre seeks information from the students admitted in the academic year 2021-22 for providing photo ID cards on or before 31.1.2022",
	},
	{
		topic: "For the attention of the First year B.Tech. Students",
		byWhom: "Registar",
		message:
			"The UG/PG students with disabilities studying in PTU for the academic year 2021-22 are informed to submit personal data for the issue of Unique ID for persons with Disabilities (UDID) card by the DHTE, Govt. of Puducherry.",
	},
	{
		topic: "AICTE-UBA",
		byWhom: "Registar",
		message:
			"The first semester online classes commenced on 6.1.2022. The students are instructed to identify the section in which they belong to at <<here>>. The Time Table for all the sections can be viewed/downloaded at <<here>>.",
	},
];
export default function Notices() {
	return (
		<div className="news-corner md:grid grid-cols-6 gap-4 my-20 mx-10">
			<div className="news-part col-span-4">
				<div className="notice-head">
					<div className="notice-head-heading">
						<h2>Bulletin board</h2>
					</div>
					<div className="update-part">
						{newsObj.map((e) => {
							return (
								<Updated
									topic={e.topic}
									byWhom={e.byWhom}
									message={e.message}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className="news-part col-span-2 mr-5">
				<div className="news-in-part px-10">
					<div className="flex justify-center">
						<h3 className="not-text text-center text-2xl">
							Departmental links
						</h3>
					</div>
					<br />
					<ol className="not-ol text-left">
						<br />
						<li className="not-li my-5">Departmental Committies</li>
						<Link to="/cse/alumini">
							<li className="not-li my-5">Notable Alumni</li>
						</Link>
						<li className="not-li my-5">Placement Details</li>
						<li className="not-li my-5">Medals & Awards</li>
						<li className="not-li my-5">Retired Faculty</li>
						<li className="not-li my-5">Students</li>
						<li className="not-li my-5">Upcoming Events</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

const Updated = ({ topic, byWhom, message }) => {
	return (
		<div className="update">
			<div className="content mx-5 py-6">
				<h2 className="text-2xl">{topic}</h2>
				<div className="newss">
					<h3>{byWhom}</h3>
					<br />
					<p className="notices-msg" style={{ fontSize: "18px" }}>
						{message}
					</p>
				</div>
			</div>
			<hr />
		</div>
	);
};
