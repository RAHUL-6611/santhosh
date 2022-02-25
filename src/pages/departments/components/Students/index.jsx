import React from "react";

import articleImg from "../../../../components/assets/college_img.jpg";
import articleImg2 from "../../../../components/assets/college_img.jpg";
import "./style.css";

const Articles = [
	{
		title: "",
		byWhom: "",
	},
];

export default function index() {
	return (
		<>
			<div className="p-3">
				<div className="student-articles flex cols-span-5 row-span-4 gap-3">
					<div className="grid col-3">
						<div className="flex ">
							<div className="students-box-1 col-2 student-color m-2 p-4 flex-1">
                                <div className="">
                                   <img alt="" />
                                </div>
								<h3 className="text-2xl py-4">Articles</h3>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
								nihil?
							</div>
							<div className="students-box-2 col-4 student-color m-2 p-4">
								<h3 className="text-2xl py-4">Articles</h3>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
								nihil?
							</div>
						</div>
						<div className="flex">
							<div className="students-box-3 col-1 student-color m-2 p-4">
								<h3 className="text-2xl py-4">Articles</h3>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
								nihil?
							</div>
							<div className="students-box-4 col-2 student-color m-2 p-4">
								<h3 className="text-2xl py-4">Articles</h3>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
								nihil?
							</div>
							<div className="students-box-4 col-2 student-color m-2 p-4">
								<h3 className="text-2xl py-4">Articles</h3>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
								nihil?
							</div>
						</div>
					</div>
					<div className="side-row row-start-1 row-end-4 student-color col-2 p-3">
						{[1, 2, 3, 45, 1, 4].map(() => {
							return (
								<div>
									<div className="students-box-5 p-4">
										<div className="article-title-students text-2xl">
											PTU Developers
										</div>
										<div className="article-by-whom mb-2">Dr. Sathyamurthi</div>
										<div className="article-img-pic">
											<img
												src={articleImg}
												style={{ width: "380px", height: "230px" }}
											/>
										</div>
										<button className="students-read-more bg-blue-300 py-1 px-7 my-5">
											Read more
										</button>
										<hr />
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="student-talent-showcase"></div>
				<div className="professional-dev-workshops"></div>
				<div className="industry-Exploration"></div>
			</div>
		</>
	);
}