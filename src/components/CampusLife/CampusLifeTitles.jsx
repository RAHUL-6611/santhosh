import React from "react";

function CampusLifeTitles({
	selectedCampusLifePhoto,
	campusLifePhotosData,
	onItemSelected,
}) {
	return (
		<ul className="campus-life-titles__list">
			{campusLifePhotosData.map((campusLifePhoto, index) => {
				return (
					<li
						key={index}
						className={`campus-life-titles__item ${
							selectedCampusLifePhoto &&
							selectedCampusLifePhoto.title === campusLifePhoto.title
								? "campus-life-titles__item--selected"
								: ""
						}`}
						onClick={() => onItemSelected(campusLifePhoto)}
					>
						{campusLifePhoto.title}
					</li>
				);
			})}
		</ul>
	);
}

export default CampusLifeTitles;
