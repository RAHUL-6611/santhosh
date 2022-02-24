import React, { useState, useEffect } from "react";
import { CustomCountUp } from "../../../../components/StudentCount";
let arr = [
	{
		name: "B.Tech Students",
		count: 481,
	},
	{
		name: "M.Tech Students",
		count: 39,
	},
	{
		name: "MCA Students",
		count: 84,
	},
	{
		name: "Ph.D Scholars",
		count: 481,
	},
	{
		name: "Faculty",
		count: 24,
	},
	{
		name: "Staff",
		count: 10,
	},
];

const About = () => {
	// let elements = [0, 0, 0, 0, 0, 0]
	// let number = "90";
	let duration = 5;
	let [count, setCount] = useState("0");

	// useEffect(() => {
	// 	let start = 0;
	// 	// first three numbers from props
	// 	const end = parseInt(toString(number).substring(0,3))
	// 	// if zero, return
	// 	if (start === end) return;

	// 	// find duration per increment
	// 	let totalMilSecDur = parseInt(duration);
	// 	let incrementTime = (totalMilSecDur / end) * 1000;

	// 	// timer increments start counter
	// 	// then updates count
	// 	// ends if start reaches end
	// 	let timer = setInterval(() => {
	// 	  start += 1;
	// 	  setCount(String(start) + toString(number).substring(3))
	// 	  if (start === end) clearInterval(timer)
	// 	}, incrementTime);
	// },[duration])

	return (
		<div>
			<div className="cse-hold hw1 block md:flex md:justify-evenly px-20 pt-10 mt-20">
				<div>
					<div className="explore text-left">Explore the</div>
					<div className="dept-title text-left">CSE Department</div>
				</div>
				<div className="title_of-dept">
					<div className="numbers grid grid-cols-3 gap-14">
						{arr.map((e, index) => {
							return (
								<p className="col-span-1">
									<h5 className="numberse_here text-center">
										<CustomCountUp end={e.count} />
										{/* {incrementer((e.count))} */}
									</h5>
									<div className="numbers_name">
										<h3 className="name_here text-2xl text-center">{e.name}</h3>
									</div>
								</p>
							);
						})}
					</div>
				</div>
			</div>

			<div className="hw2 p-10 mx-20 my-10">
				<br />
				<h5 className="dep-h text-4xl">About the Department</h5>
				<p className="dep-p py-10">
					The Department aims at providing high quality training to students
					through the latest in computer technology. In order to maintain the
					standard of education, the department constantly upgrades the academic
					syllabi so as to keep the students well trained to deal with changing
					trends in the field of Computer Science and Engineering. The
					Department offers B.Tech. (CSE), M.Tech. (Data Science), M.Tech.
					(Information Security), MCA and Ph.D.(including QIP and NDF schemes)
					programme. The Department places emphasis on Component Technology,
					Computing, Data Sciences, Information Security, High Speed Networks,
					Wireless and Mobile Networks, Agile Programming Methodologies,
					Language Technologies, Software Architecture, Software metrics, and
					several other recent topics. The Choice Based Credit System is
					followed for PG program which enables the selection of subjects by
					students themselves and confers grades relative to the peer's
					performance. The curriculum of all courses are designed in such a way
					so as to enable students to carry out major and minor projects in
					leading industries/institutions, besides their regular classes and
					seminars. The students of the department have done projects in major
					companies like TCS, HCL, Qualcomm, Zoho, RAMCO, CTS, Nature Soft, NAL,
					ISRO, NLC, IGCAR etc. The Department regularly organizes a series of
					lectures by academicians and professionals of the highest repute,
					which lay stress on the latest innovative technologies in the field of
					Computer Science and Engineering and Information Technology.
				</p>
				<div className="d-btn-hold text-left">
					<button className="d-read px-5 py-2 text-white">
						<a
							href="http://beta.ptuniv.edu.in/edu/dept/cse/brochure/index.html"
							target="_blank"
							rel="noreferrer"
						>
							Download Brochure
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
