import React, { useEffect, useRef, useState } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { API_BASE_URL } from "../../config";
import "./NewsPTU.css";
import Placeholder from "../Placeholder";
import useFetch from "../../hooks/useFetch";
import { getMonthShortForm } from "../../utils/common";

// let eventObj = [
// 	{
// 		news_id: "26",
// 		title: "Event Heading",
// 		given_by: null,
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-14",
// 	},
// 	{
// 		news_id: "27",
// 		title: "Event Heading",
// 		given_by: null,
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-14",
// 	},
// ];

// let newsObj = [
// 	{
// 		title: "News Heading",
// 		given_by: "Registrar",
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "News Heading",
// 		given_by: "Registrar",
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "News Heading",
// 		given_by: "Registrar",
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "News Heading",
// 		given_by: "Registrar",
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "News Heading",
// 		given_by: "Registrar",
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "News Heading",
// 		given_by: "Registrar",
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "News Heading",
// 		given_by: null,
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "News Heading",
// 		given_by: null,
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "News Heading",
// 		given_by: null,
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "News Heading",
// 		given_by: null,
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "News Heading",
// 		given_by: null,
// 		news_content: "Small news msg instead of long one",
// 		start_date: "2022-02-05",
// 		end_date: "2022-02-10",
// 		file_name: "https://www.pec.edu/February2022/chartedBusCircular3222.pdf",
// 	},
// 	{
// 		title: "New Title",
// 		given_by: "Dr.Sathiyamurthy ",
// 		news_content: "qqq",
// 		start_date: "2022-02-09",
// 		end_date: "2022-02-12",
// 		file_name: null,
// 	},
// 	{
// 		title: "New Title",
// 		given_by: "Dr.Sathiyamurthy ",
// 		news_content: "qwert",
// 		start_date: "2022-02-09",
// 		end_date: "2022-02-11",
// 		file_name: null,
// 	},
// 	{
// 		title: "test",
// 		given_by: "HOD CSE",
// 		news_content: "test_content",
// 		start_date: "2022-02-03",
// 		end_date: "2022-03-03",
// 		file_name: null,
// 	},
// 	{
// 		title: "test",
// 		given_by: "HOD CSE",
// 		news_content: "test_content",
// 		start_date: "2022-02-03",
// 		end_date: "2022-03-03",
// 		file_name: null,
// 	},
// ];

export function AutoScrollContainer(props) {
	const { title, data, children } = props;
	const updatesContainerRef = useRef();
	const updateRef = useRef();

	const [animationStatus, setAnimationStatus] = useState("play");
	const [scrollHeight, setScrollHeight] = useState(0);

	useEffect(() => {
		// const element = updatesContainerRef.current;
		// // calculating the scroll height without the styles
		// // because by default the style is overflow hidden
		// // with scroll value only we can calculate
		// updateRef.current?.classList.remove("updates");
		// element?.classList.remove("updates-container--animation");
		// if (!(element?.scrollHeight > element?.clientHeight)) {
		// 	return;
		// }
		// element?.classList.add("updates-container--animation");
		// updateRef.current?.classList.add("updates");
		// let totalScrollHeight = element?.scrollHeight - element?.clientHeight;
		// setScrollHeight(totalScrollHeight);
	}, [updatesContainerRef, updateRef]);

	useEffect(() => {
		// const updatesContainer = updatesContainerRef.current;
		// function handleResize() {
		// 	// recalculating the scroll height without the styles
		// 	updateRef.current?.classList.remove("updates");
		// 	updatesContainer?.classList.remove("updates-container--animation");
		// 	setScrollHeight(
		// 		updatesContainer?.scrollHeight - updatesContainer?.clientHeight
		// 	);
		// 	updatesContainer?.classList.add("updates-container--animation");
		// 	updateRef.current?.classList.add("updates");
		// }
		// window.addEventListener("resize", handleResize);
		// return () => {
		// 	window.removeEventListener("resize", handleResize);
		// };
	}, [updatesContainerRef, updateRef]);

	const toggleAnimationStatus = () => {
		setAnimationStatus(animationStatus === "play" ? "pause" : "play");
	};

	const handleOnMouseEnter = () => {
		setAnimationStatus("pause");
	};

	const handleOnMouseLeave = () => {
		setAnimationStatus("play");
	};

	return (
		<div className="news-ptu-part">
			<div className="news-ptu-part__head">
				<h2>{title}</h2>
				{scrollHeight > 0 && (
					<button
						className="news-ptu-part__head-control"
						onClick={toggleAnimationStatus}
					>
						{animationStatus === "play" ? <IoMdPause /> : <IoMdPlay />}
					</button>
				)}
			</div>

			<div
				ref={updatesContainerRef}
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={handleOnMouseLeave}
				className={`updates-container hide-scrollbar ${
					scrollHeight > 0 ? "updates-container--animation" : ""
				}`}
			>
				<div
					ref={updateRef}
					className={`${scrollHeight > 0 ? "updates" : ""} ${
						animationStatus === "pause" ? "update-paused" : ""
					}`}
					style={{
						"--to": `-${scrollHeight}px`,
						"--duration": `${data.length * 2}s`,
					}}
				>
					{data.map((...rest) => children(...rest, setAnimationStatus))}
				</div>
			</div>
		</div>
	);
}

export function NoticesAndUpdates({ visiblity = "all" }) {
	const response = useFetch(
		"News_Event.php?visiblity=" + visiblity + "&content=notices"
	);

	const { data, error } = response;
	console.log(data);

	// console.log(response);

	if (error || !data || data.length === 0) {
		return (
			<div className="news-ptu-part">
				<div className="news-ptu-part__head">
					<h2>Notices and Updates</h2>
				</div>

				{error ? (
					<div className="updates-container hide-scrollbar updates-error-container">
						<h2>Something went wrong</h2>
					</div>
				) : !data ? (
					<div className="updates-container hide-scrollbar">
						<div className="updates-placeholder-container">
							<Placeholder className="updates-topic-placeholder" />
							<Placeholder className="updates-bywhom-placeholder" />
							<Placeholder className="updates-message-line1-placeholder" />
							<Placeholder className="updates-message-line2-placeholder" />
						</div>
						<div className="updates-placeholder-container">
							<Placeholder className="updates-topic-placeholder" />
							<Placeholder className="updates-bywhom-placeholder" />
							<Placeholder className="updates-message-line1-placeholder" />
							<Placeholder className="updates-message-line1-placeholder" />
							<Placeholder className="updates-message-line2-placeholder" />
						</div>
					</div>
				) : data.length === 0 ? (
					<div className="updates-container hide-scrollbar updates-empty-container">
						<h2>No Notices and Updates</h2>
					</div>
				) : null}
			</div>
		);
	}

	return (
		<AutoScrollContainer title="Notices and Updates" data={data}>
			{(e, i) => {
				return (
					<Updated
						key={i}
						topic={e.title}
						byWhom={e.given_by}
						message={e.news_content}
						file_name={e.file_name}
					/>
				);
			}}
		</AutoScrollContainer>
	);
}

export function Events({ visiblity = "all" }) {
	const response = useFetch(
		"News_Event.php?visiblity=" + visiblity + "&content=events"
	);

	const { data, error } = response;

	console.log(response);

	if (error || !data || data.length === 0) {
		return (
			<div className="news-ptu-part">
				<div className="news-ptu-part__head">
					<h2>Upcoming Events</h2>
				</div>

				{error ? (
					<div className="updates-container hide-scrollbar updates-error-container">
						<h2>Something went wrong</h2>
					</div>
				) : !data ? (
					<div className="updates-container hide-scrollbar">
						<div className="event__container event__container--placeholder">
							<Placeholder className="event__box-card event__box-card-placeholder" />
							<div className="event__description event__description--placeholder">
								<div>
									<Placeholder className="updates-message-line1-placeholder" />
									<Placeholder className="updates-message-line1-placeholder" />
									<Placeholder className="updates-message-line2-placeholder" />
								</div>
							</div>
						</div>
						<div className="event__container event__container--placeholder">
							<Placeholder className="event__box-card event__box-card-placeholder" />
							<div className="event__description event__description--placeholder">
								<div>
									<Placeholder className="updates-message-line1-placeholder" />
									<Placeholder className="updates-message-line1-placeholder" />
									<Placeholder className="updates-message-line2-placeholder" />
								</div>
							</div>
						</div>
						<div className="event__container event__container--placeholder">
							<Placeholder className="event__box-card event__box-card-placeholder" />
							<div className="event__description event__description--placeholder">
								<div>
									<Placeholder className="updates-message-line1-placeholder" />
									<Placeholder className="updates-message-line1-placeholder" />
									<Placeholder className="updates-message-line2-placeholder" />
								</div>
							</div>
						</div>
					</div>
				) : data.length === 0 ? (
					<div className="updates-container hide-scrollbar updates-empty-container">
						<h2>No Events</h2>
					</div>
				) : null}
			</div>
		);
	}

	return (
		<AutoScrollContainer title="Upcoming Events" data={data}>
			{(e, i) => {
				const date = new Date(e.start_date);
				return (
					<Event
						key={i}
						topic={e.title}
						message={e.news_content}
						date={date.getDate()}
						month={getMonthShortForm(date.getMonth())}
					/>
				);
			}}
		</AutoScrollContainer>
	);
}

export default function NewsPTU() {
	return (
		<div className="news-ptu__container">
			<NoticesAndUpdates />
			<Events />
		</div>
	);
}

const Updated = ({ topic, byWhom, message, file_name }) => {
	return (
		<div className="update__container">
			<div className="update__content">
				<h2>{topic}</h2>
				<div className="update__newss">
					<h3>{byWhom}</h3>
					<br />
					<p>{message}</p>
					<a href={API_BASE_URL + file_name} target="_blank">
						<p>View More</p>
					</a>
				</div>
			</div>
			<hr />
		</div>
	);
};

const Event = ({ date, month, topic, message }) => {
	return (
		<div className="event__container">
			<div className="event__box-card">
				<div className="event__date">
					<h4 className="event__date-text">
						{date} <br /> {month}
					</h4>
				</div>
			</div>
			<div className="event__description">
				<div>
					<p>{topic}</p>
					<p>{message}</p>
				</div>
			</div>
		</div>
	);
};
