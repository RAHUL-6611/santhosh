import React, { useRef, useState } from "react";
import { IoMdPlay, IoMdPause } from "react-icons/io";

import "./NewsFlash.css";
import useFetch from "../../hooks/useFetch";

function NewsFlash({ visiblity = "main" }) {
	const marqueeRef = useRef();
	const [marqueeStatus, setMarqueeStatus] = useState("play");
	const { data, error } = useFetch(
		"News_Event.php?visiblity=" + visiblity + "&content=news_flash"
	);

	const toggleMarqueeStatus = () => {
		if (marqueeStatus === "play") {
			setMarqueeStatus("pause");
			marqueeRef.current?.stop();
		} else {
			setMarqueeStatus("play");
			marqueeRef.current?.start();
		}
	};

	if (error) {
		console.error(error);
		return null;
	}
	if (!data || data.length === 0) {
		return null;
	}

	return (
		<div className="news-flash">
			<p>
				<span>NEWS FLASH</span>{" "}
				<button className="news-flash__control" onClick={toggleMarqueeStatus}>
					{marqueeStatus === "play" ? <IoMdPause /> : <IoMdPlay />}
				</button>
			</p>
			<marquee ref={marqueeRef}>
				<ul className="news-flash__list">
					{data.map((news) => {
						return (
							<li key={news.news_id} className="news-flash__item">
								<b>{news.given_by} : </b>
								{news.news_content}
							</li>
						);
					})}
				</ul>
			</marquee>
		</div>
	);
}

export default NewsFlash;
