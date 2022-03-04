import React from "react";
import { Link } from "react-router-dom";

import "./Notice.css";
import "../../../../components/NewsPTU/NewsPTU.css";
import { NoticesAndUpdates, Updated } from "../../../../components/NewsPTU";
import useFetch from "../../../../hooks/useFetch";

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
export default function Notices({ value }) {
	console.log(value);
	return (
		<div className="news-corner md:grid grid-cols-6 gap-4 my-20 mx-10">
			{/* <div className="news-part col-span-4">
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
			</div> */}
			<BulletinBoard visiblity="all" />
			<div className="news-part mr-5">
				<div className="news-in-part px-10">
					<div className="flex justify-center">
						<h3 className="not-text text-center text-2xl">
							Departmental links
						</h3>
					</div>
					<br />
					<ol className="not-ol text-left">
						<br />
						<Link to={`#`}>
							<li className="not-li my-5">Departmental Committies</li>
						</Link>
						<Link to={`#`}>
							<li className="not-li my-5">Notable Alumni</li>
						</Link>
						<Link to={`#`}>
							<li className="not-li my-5">Placement Details</li>
						</Link>
						<Link to={`#`}>
							<li className="not-li my-5">Medals & Awards</li>
						</Link>
						<Link to={`#`}>
							<li className="not-li my-5">Retired Faculty</li>
						</Link>
						<Link to={`#`}>
							<li className="not-li my-5">Students</li>
						</Link>
						<Link to={`#`}>
							<li className="not-li my-5">Upcoming Events</li>
						</Link>
					</ol>
				</div>
			</div>
		</div>
	);
}

export function BulletinBoard({ visiblity = "all", dept = "cse" }) {
	const allResponse = useFetch(
		"News_Event.php?visiblity=" + visiblity + "&content=notices"
	);

	const deptResponse = useFetch(
		"News_Event.php?visiblity=" + dept + "&content=notices"
	);

	let { error: allError, data: allData } = allResponse;
	let { error: deptError, data: deptData } = deptResponse;

	const error = allError || deptError;

	// console.log(response);

	if (error) {
		return (
			<div className="news-ptu-part">
				<div className="news-ptu-part__head">
					<h2>Bulletin board</h2>
				</div>

				<div className="updates-container">
					<h2>Something went wrong</h2>
				</div>
			</div>
		);
	}

	let array = [];

	console.log({ allData, deptData });

	if (allData) {
		array = [...allData];
	}
	if (deptData) {
		array = [...array, ...deptData];
	}

	if (array.length === 0) {
		return (
			<div className="news-ptu-part">
				<div className="news-ptu-part__head">
					<h2>Bulletin board</h2>
				</div>

				<div className="updates-container">
					<h2>No Bulletin board</h2>
				</div>
			</div>
		);
	}

	return (
		<div className="news-ptu-part">
			<div className="news-ptu-part__head">
				<h2>Notices and Updates</h2>
			</div>

			<div className="updates-container">
				{array.map((e, i) => {
					return (
						<Updated
							key={i}
							topic={e.title}
							byWhom={e.given_by}
							message={e.news_content}
							file_name={e.file_name}
						/>
					);
				})}
			</div>
		</div>
	);
}
