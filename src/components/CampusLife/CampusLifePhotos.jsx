import React, { useEffect, useRef } from "react";
import { IoMdArrowBack } from "react-icons/io";

function CampusLifePhotos({
	showHeader = true,
	showHeading = true,
	campusLifePhotoData,
	onPressBack,
}) {
	const containerRef = useRef();

	useEffect(() => {
		containerRef?.current.scroll(0, 0);
	}, [campusLifePhotoData]);

	return (
		<div ref={containerRef} className="campus-life-photos">
			{showHeader && (
				<div className="campus-life-photos__header">
					<IoMdArrowBack onClick={onPressBack} />
				</div>
			)}
			<div className="campus-life-photos__body">
				{showHeading && (
					<h3 className="campus-life-photos__heading">
						{campusLifePhotoData.title}
					</h3>
				)}
				<img
					className="campus-life-photos__img"
					alt=""
					{...campusLifePhotoData.img}
				/>
				<p className="campus-life-photos__desc">{campusLifePhotoData.desc}</p>
				{campusLifePhotoData.moreInfoLink && (
					<a
						href="/"
						target="_blank"
						className="campus-life-photos__link"
						{...campusLifePhotoData.moreInfoLink}
					>
						More information
					</a>
				)}
			</div>
		</div>
	);
}

export default CampusLifePhotos;
