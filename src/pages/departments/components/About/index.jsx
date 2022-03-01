import React, { useState } from "react";
import { CustomCountUp } from "../../../../components/StudentCount";

const About = ({ value }) => {
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

    value = value.About

	return (
		<div>
			<div className="cse-hold hw1 flex md:flex md:justify-evenly px-20 pt-10 mt-20">
				<div>
					<div className="explore text-left">Explore the</div>
					<div className="dept-title text-left">
						<p style={{fontSize:"22px"}}>
						{value.LongName}
						</p>
						</div>
				</div>
				<div className="title_of-dept">
					<div className="numbers grid grid-cols-3 gap-14">
						{value.count.map((e, index) => {
							return (
								<p className="col-span-1">
									<div className="numbers_name pb-2">
										<h3 className="name_here text-2xl text-center"><CustomCountUp end={e.count} /></h3>
									</div>
									<br />
									<h5 className="numberse_here text-center">
										{e.name}
									</h5>
								</p>
							);
						})}
					</div>
				</div>
			</div>

			<div className="hw2 p-10 lg:mx-20 mx:5 my-10">
				<br />
				<h5 className="dep-h text-4xl">About the Department</h5>
				<p className="dep-p py-10">
					{value.about}
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
