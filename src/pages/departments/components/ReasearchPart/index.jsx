import React from "react";
import { getImageUrl } from "../../../../config";

import "./ResearchPard.css";

let research_arr = [
	{
		title: "Artificial intelligence and robotics",
		content:
			"With the global robotics industry forecast to be worth US$80 billion by 2024, a large portion of this growth is down to the strength of interest and investment in artificial intelligence (AI) – one of the most controversial and intriguing areas of computer science research. ",
		img: getImageUrl("res1.jpg"),
	},
	{
		title: "Big data analytics",
		content:
			"Back in 2012, the Harvard Business Review branded data science the ‘sexiest job’ of the 21 century. Yes, you read that correctly.",
		img: getImageUrl("res2.jpg"),
	},
	{
		title: "Computer-assisted education",
		content:
			"The use of computers and software to assist education and/or training, computer-assisted education brings many benefits and has many uses.",
		img: getImageUrl("res3.jpg"),
	},
	{
		title: "Bioinformatics",
		content:
			"A fascinating application of big data, bioinformatics, or the use of programming and software development to build enormous datasets of biological information for research purposes, carries enormous potential.",
		img: getImageUrl("res4.jpg"),
	},
	{
		title: "Cyber security",
		content:
			"According to the US Bureau of Labor Statistics, cyber security jobs are predicted to grow by 28 percent between 2016 and 2026 – much faster than average for all occupations, and raising concerns about the shortfall in qualified graduates. ",
		img: getImageUrl("res5.jpg"),
	},
];

export default function Research() {
	return (
		<div class="containerr p-10 block lg:grid lg:grid-cols-2 gap-7">
			{research_arr.map((e, index) => {
				return (
					<div className="">
						<div class="boxx flex">
							<div className="flex">
								<div className="px-10 py-5 research-boxxx">
								  <h2>{index + 1}</h2>
								  <h3>{e.title}</h3>
								  <br />
								<p className="R-para p-10">{e.content}</p>
								</div>
								<div>
							    	<img className="imgg" src={e.img} alt="" />
								</div>
							</div>
							{/* <div className="imgg-div">
								<img className="imgg" src={e.img} alt="" />
							</div> */}
						</div>
					</div>
				);
			})}
		</div>
	);
}
