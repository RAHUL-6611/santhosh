import React from "react";
import {
	TiSocialFacebook,
	TiSocialTwitter,
	TiSocialLinkedin,
	TiSocialInstagram,
} from "react-icons/ti";

import { getImageUrl } from "../../../../config";

let details = [
	{
		img: getImageUrl("a1.jpg"),
		name: "Sridhar",
	},
	{
		img: getImageUrl("a2.jpg"),
		name: "Arun kumar",
	},
	{
		img: getImageUrl("a3.jpg"),
		name: "Sai Vamsi",
	},
	{
		img: getImageUrl("a4.jpg"),
		name: "Anand P",
	},
	{
		img: getImageUrl("a5.jpg"),
		name: "Ritesh",
	},
	{
		img: getImageUrl("a6.jpg"),
		name: "Tharun",
	},
	{
		img: getImageUrl("a7.jpg"),
		name: "Hanthika G",
	},
	{
		img: getImageUrl("a1.jpg"),
		name: "Sridhar",
	},
	{
		img: getImageUrl("a3.jpg"),
		name: "Sai Vamsi",
	},
	{
		img: getImageUrl("a6.jpg"),
		name: "Sai Vamsi",
	},
	{
		img: getImageUrl("a5.jpg"),
		name: "Sai Vamsi",
	},
	{
		img: getImageUrl("a7.jpg"),
		name: "Hanthika G",
	},
];

export default function Alumini() {
	return (
		<div className="alumini-hold block md:grid md:grid-cols-2 gap-6 p-20">
			{details.map((e) => {
				return (
					<div className="alumini-box col-span-1 flex justify-between m-10">
						<div className="alumini-parts block">
							<div>
								<h5 className="text-left text-4xl py-5">{e.name}</h5>
							</div>
							<div className="text-left">
								Sridhar is our alumini of 2004 batch. He is now a CEO of Blue
								tech private limited. He completed his B.Tech in our department
								and done his masters in Harvard University in Data Science.
							</div>
							<ol className="flex justify-evenly pt-5">
								<li>
									<TiSocialFacebook className="text-5xl" />
								</li>
								<li>
									<TiSocialLinkedin className="text-5xl" />
								</li>
								<li>
									<TiSocialTwitter className="text-5xl" />
								</li>
								<li>
									<TiSocialInstagram className="text-5xl" />
								</li>
							</ol>
						</div>
						<div className="alumini-parts">
							<img src={e.img} alt="alumini1" className="alumini-img" />
						</div>
					</div>
				);
			})}
		</div>
	);
}
