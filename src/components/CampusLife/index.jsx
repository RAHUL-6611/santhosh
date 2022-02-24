import React, { useState } from "react";

import "./CampusLife.css";

import CampusLifeTitles from "./CampusLifeTitles";
import CampusLifePhotos from "./CampusLifePhotos";
import useDimension from "../../hooks/useDimension";

const campusLifePhotos = [
	{
		title: "Library",
		desc: "Constructed in 1994, the PEC Library is located in an easily accessible central part of the PEC Campus, surrounded by various departments. The Library building with its striking architecture has been carefully planned to provide more space and natural lighting for the comfort of the users. It houses over 56,000 books of diverse disciplines from national and international authors, numbers of research publications, science journals and also provides e-access to it's staffs and students through which a huge collection of e-books and journals is available.",
		img: {
			src: "https://cms.pec.edu/home/img/library.jpg",
		},
		moreInfoLink: {
			href: "https://cms.pec.edu/files/pecLibrary.pdf",
		},
	},
	{
		title: "Auditorium",
		img: {
			src: "https://cms.pec.edu/home/img/audi.jpg",
		},
		desc: "The auditorium of PEC is a marvellous construction with a seating capacity of around 800 people. The main hall of the auditorium is engineered for fantastic acoustics and have all the necessary equipment for hosting a performance, function or presentation. The two storeyed building also houses a cafeteria with attached kitchen, 2 seminar halls and green rooms.",
		moreInfoLink: null,
	},
	{
		title: "Sports Complex",
		img: {
			src: "https://cms.pec.edu/home/img/sports.jpg",
		},
		desc: "The sports complex of PEC bustles with energy all the time and has been fostering several athletes at PEC for ages now. The Sports Complex encompasses the basketball, football/cricket, volleyball and handball courts. Sports events are conducted round the year concluded by a grand Sports day to felicitate the champions of the year.",
		moreInfoLink: null,
	},
	{
		title: "Shopping Complex",
		img: {
			src: "https://cms.pec.edu/home/img/shopping.jpg",
		},
		desc: "The shopping complex at the campus caters to all essential needs of Day scholars and hostellers. There is a stationery store, browsing centre and a snack bar within the complex.",
		moreInfoLink: null,
	},
	{
		title: "Hostel",
		img: {
			src: "https://cms.pec.edu/home/img/hostel.jpg",
		},
		desc: "There are 3 boys’ hostels (Varali, Saranga and Charukesi named after ragas of Carnatic Music) and a girls’ hostel (Tharangini). The hostels at PEC witness students of varied culture and diversities from various parts of India. The hostels have attached mess and serves a menu decided collectively by the students of the hostel. Every hostel is equipped with Wi-Fi facility and has a common room and spacious areas where the members can socialize, relax or play. Hostellers celebrate festivals like Chithirai Thiruvizha, Onam and Holi with great energy and responsibility every year.",
		moreInfoLink: null,
	},
	{
		title: "TNP Centre and Atul Incubator",
		img: {
			src: "https://cms.pec.edu/home/img/tnp.jpg",
		},
		desc: "The TNP (Training and Placement) Cell provide trainings and hosts placement drives for industry keen students of the college. It is well equipped with systems to conduct online tests and has various halls and rooms to suit drive scenarios like group discussions, interviews and mass testing. The building also houses the Atal Incubation Centre which screens viable, innovative ideas presented by the students and incubates it for commercial production for promoting Entrepreneurship within the campus.",
		moreInfoLink: null,
	},
	{
		title: "Open Air theatre",
		img: {
			src: "https://cms.pec.edu/home/img/oat.jpg",
		},
		desc: "The Open Air Theatre (OAT) at PEC is a spacious theatre with the capacity to accommodate around 500 people. The OAT would witness a lot of fun gatherings. People gather and enjoy with zest here for DJ night or any fest organized there. Another open air stage is constructed behind the auditorium which can accommodate even more audience. The spot is perfect with cool breeze blowing for hosting night-time functions under the stars.",
		moreInfoLink: null,
	},
	{
		title: "Dispensary",
		img: {
			src: "https://cms.pec.edu/home/img/dispensary.jpg",
		},
		desc: "There is a dispensary at the premises functioning all round the clock, along with an ambulance for emergency use. There is a well-trained doctor and nurse posted to take care of student and staff ailments.",
		moreInfoLink: null,
	},
];

export default function CampusLifeOne() {
	const [selectedCampusLifePhoto, setSelectedCampusLifePhoto] = useState(null);
	const { dimension } = useDimension();

	const handleItemSelected = (item) => {
		setSelectedCampusLifePhoto(item);
	};

	const handleOnPressBack = () => {
		setSelectedCampusLifePhoto(null);
	};

	let content = null;

	if (dimension.width <= 750) {
		if (selectedCampusLifePhoto) {
			content = (
				<section className="campus-container__photos">
					<CampusLifePhotos
						campusLifePhotoData={selectedCampusLifePhoto ?? campusLifePhotos[0]}
						onPressBack={handleOnPressBack}
					/>
				</section>
			);
		} else {
			content = (
				<section className="campus-container__titles">
					<CampusLifeTitles
						onItemSelected={handleItemSelected}
						campusLifePhotosData={campusLifePhotos}
					/>
				</section>
			);
		}
	} else {
		content = (
			<>
				<section className="campus-container__titles">
					<CampusLifeTitles
						selectedCampusLifePhoto={
							selectedCampusLifePhoto ?? campusLifePhotos[0]
						}
						onItemSelected={handleItemSelected}
						campusLifePhotosData={campusLifePhotos}
					/>
				</section>
				<section className="campus-container__photos">
					<CampusLifePhotos
						showHeader={false}
						showHeading={false}
						campusLifePhotoData={selectedCampusLifePhoto ?? campusLifePhotos[0]}
					/>
				</section>
			</>
		);
	}

	return (
		<div className="parent-container">
			<h1 className="title">Campus Life</h1>
			<div className="campus-container">
				{content}
				{/* <div className="col11 items">
					<img src={getImageUrl("eie 2.jpg")} alt="" />
				</div>
				<div className="col12 items">
					<img src={getImageUrl("civil.jpg")} alt="" />
				</div>
				<div className="col13 items">
					<img src={getImageUrl("ece.jpg")} alt="" />
				</div>

				<div className="col14 items">
					<img src={getImageUrl("eee.jpg")} alt="" />
				</div>
				<div className="col15 items">
					<img src={getImageUrl("ecedept.jpg")} alt="" />
				</div> */}
			</div>
		</div>
	);
}
