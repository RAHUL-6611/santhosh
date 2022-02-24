import React, { useRef, useState } from "react";
import { IoMdPlay, IoMdPause } from "react-icons/io";

import "./NewsFlash.css";

function NewsFlash() {
	const marqueeRef = useRef();
	const [marqueeStatus, setMarqueeStatus] = useState("play");

	const toggleMarqueeStatus = () => {
		if (marqueeStatus === "play") {
			setMarqueeStatus("pause");
			marqueeRef.current?.stop();
		} else {
			setMarqueeStatus("play");
			marqueeRef.current?.start();
		}
	};

	return (
		<div className="news-flash">
			<p>
				<span>NEWS FLASH</span>{" "}
				<button className="news-flash__control" onClick={toggleMarqueeStatus}>
					{marqueeStatus === "play" ? <IoMdPause /> : <IoMdPlay />}
				</button>
			</p>
			<marquee ref={marqueeRef}>
				{/* Latest news from the University &nbsp; &nbsp; &nbsp; 📰 &nbsp; &nbsp;
    &nbsp; Latest news from the University */}
				Classes will be conducted in offline mode with effect from 4.2.2022
				except for First year B.Tech
			</marquee>
			{/* <marquee>Latest news from the University</marquee> */}
		</div>
	);
}

export default NewsFlash;
