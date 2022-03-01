import { useState, useEffect } from "react";
import "./carousel.css";
import {Link} from "react-router-dom"
// import img1 from '../../images/cse.jpg';
import { getImageUrl } from "../../config";

/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/

const slideWidth = 20;

const _items = [
	{
		player: {
			//8
			title: "IT",
			desc: "The Department of Information Technology has well experienced faculty, skilled technical staff and well equipped laboratories. It offers one undergraduate program B.Tech. (Information Technology). It aims at providing high quality training to students through the latest in Information Technology.",
			image: getImageUrl("eie 2.jpg"),
			path :"/it"
		},
	},
	{
		player: {
			//9
			title: "CSE",
			desc: "The Department aims at providing high quality training to students through the latest in computer technology and  offers B.Tech. (CSE), M.Tech. (Data Science), M.Tech. (Information Security), MCA and Ph.D.(including QIP and NDF schemes) programme.",
			image: getImageUrl("cse.jpg"),
			path:"/cse",
		},
	},
	{
		player: {
			//first
			title: "EEE",
			desc: "The Department of Electrical and Electronics Engineering provides a progressive environment for learning through systematic teaching methodologies, rigorous practical training and contemporary curriculum; research through creative activities in conventional and thrust areas of Electrical and Electronics Engineering.",
			image: getImageUrl("eee.jpg"),
			path:"eee",
		},
	},
	
	{
		player: {
			//2
			title: "ECE",
			desc: "Dept. of ECE, Pondicherry Engineering College was established in the year 1985. Throughout its sparkling history of 33 years, the department of ECE has been known for its exceptionally strong Under-Graduate and Graduate training programmes.",
			image: getImageUrl("ece 2.jpg"),
			path:"ece",
		},
	},
	{
		player: {
			//4
			title: "Chemical",
			desc: "The Department of chemical engineering was established in the year 1998 with a vision to impart high quality chemical engineering education and to serve the needs of industries and societies through technical services, consultancy and research.",
			image: getImageUrl("chemical department.jpg"),
			path:"chem",
		},
	},
	{
		player: {
			//5
			title: "EIE",
			desc: "Instrumentation is the branch of engineering that deals with measurement and control. In  this  fully  automated world, this  course  which  is  a  complete  blend  of  technical  subjects.",
			image: getImageUrl("eie 2.jpg"),
			path:"eie",
		},
	},
	{
		player: {
			//6
			title: "Civil",
			desc: "The Department of Civil Engineering was established during the inception of the college. Apart from offering B.Tech in Civil Engineering, two M.Tech programmes in Structural Engineering and Environmental Engineering specialization and PhD  programme in Civil Engineering are offered.",
			image: getImageUrl("civil.jpg"),
			path:"civil",
		},
	},
	{
		player: {
			//7
			title: "Mectronics",
			desc: "The Department of Mechanical Engineering offers B. Tech., M. Tech., and Ph. D Programmes. The Department of Mechanical Engineering has become the QIP centre in the year 2013. Highly qualified, experienced and committed faculty members significantly contribute to the growth of the college in general and the Department in particular. The UG course of the department is accreted by NBA for a period of 5 years. ",
			image: getImageUrl("me.jpg"),
			path:"mectro",
		},
	},
];

_items.sort((a, b) => a.player.title.localeCompare(b.player.title));

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
	const item = {
		styles: {
			transform: `translateX(${position * slideWidth}rem)`,
		},
		player: _items[idx].player,
	};

	switch (position) {
		case length - 1:
			item.styles = {
				...item.styles,
				opacity: 0,
				display: "none",
				zIndex: "-11111",
			};
			break;
		case length + 1:
			item.styles = {
				...item.styles,
				opacity: 0,
				display: "none",
				zIndex: "-11111",
			};
			break;
		case length:
			item.styles = {
				...item.styles,
				opacity: 0,
				display: "none",
				zIndex: "-11111",
			};
			break;
		default:
			item.styles = { ...item.styles, opacity: 1, zIndex: "-11111" };
			break;
	}

	return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx, path }) => {
	const item = createItem(pos, idx, activeIdx);
	console.log(item.player.path);
	return (
		<Link to={item.player.path}>
		<li className="carousel__slide-item" style={item.styles}>
			<div className="carousel-slide-item__body">
				<h4>{item.player.title}</h4>
			</div>
			<div className="carousel__slide-item-img-link">
				<img src={item.player.image} alt={item.player.title} />
			</div>
			<div className="carousel-slide-item__body">
				<p className="car-para">{item.player.desc}</p>
			</div>
		</li>
		</Link>
	);
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
	const [items, setItems] = useState(keys);
	const [isTicking, setIsTicking] = useState(false);
	const [activeIdx, setActiveIdx] = useState(0);
	const bigLength = _items.length;

	const nextClick = (jump = 1) => {
		if (!isTicking) {
			setIsTicking(true);
			setItems((prev) => {
				return prev.map((_, i) => prev[(i + jump) % bigLength]);
			});
		}
	};

	const prevClick = (jump = 1) => {
		if (!isTicking) {
			setIsTicking(true);
			setItems((prev) => {
				return prev.map((_, i) => {
					if (i === bigLength - 1) {
						console.log(i);
					}
					return prev[(i - jump + bigLength) % bigLength];
				});
			});
		}
	};

	const handleDotClick = () => {
		console.error("handleDotClick not implemented");
	};

	useEffect(() => {
		if (isTicking) sleep(300).then(() => setIsTicking(false));
	}, [isTicking]);

	useEffect(() => {
		setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
	}, [items]);

	return (
		<>
			<div className="carousel__wrap">
				<div className="carousel__inner">
					<button
						className="carousel__btn carousel__btn--prev"
						onClick={() => nextClick()}
					>
						<i className="carousel__btn-arrow carousel__btn-arrow--left text-sm" />
					</button>
					<div className="carousel__container">
						<ul className="carousel__slide-list">
							{items.map((pos, i) => (
								<CarouselSlideItem
									key={i}
									idx={i}
									pos={pos}
									activeIdx={activeIdx}
									// path={pos.path}
								/>
							))}
						</ul>
					</div>
					<button
						className="carousel__btn carousel__btn--next"
						onClick={() => prevClick()}
					>
						<i className="carousel__btn-arrow carousel__btn-arrow--right" />
					</button>
					<div className="carousel__dots">
						{items.slice(0, length).map((pos, i) => (
							<button
								key={i}
								onClick={() => handleDotClick(i)}
								className={i === activeIdx ? "dot active" : "dot"}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
