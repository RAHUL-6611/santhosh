import React,{useState,useEffect} from "react";
import { getImageUrl } from "../../config";
import "./Banner.css";
import LandingPageCarousel from "../LandingPageCarousel"

function Banner() {
	// const images = ["data:image/jpeg;base64,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","https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"]
	// const [imges,setImges] = useState(images);
	// const [imgCounter, setImgCounter] = useState(0)
	// var counts;
	// useEffect(() => {
	// // 	counts=0;
	// // 	// while (imgCounter < 2){
	// 		setInterval(()=>{
	// 			// if(imgCounter<2){
	// 			// 		counts+=1
	// 			// 	}
	// 			// 	else{
	// 			// 		counts=0;
	// 			// 	}
	// 			if (counts===2){
	// 					counts=0;
	// 			}
	// 			counts++
	// 				setImgCounter(counts);
	// 			},2000)
	// 			// }

	// },[])
	
	return (
		<div>
			<div className="image_gallery">
				{/* <img
					className="image_gallery__img"
					src={imges[imgCounter]}
					// src={getImageUrl("opt-landing-page2.jpg")}
					alt=""
				/> */}
				<LandingPageCarousel />
				<div className="landingTextHere">
					{/* <div className="image-gallery__text-box">
						<h6 className="drop-in-2">Welcome to</h6>
						<h1 className="drop-in-2">
							PUDUCHERRY
							<br />
							TECHNOLOGICAL
							<br />
							UNIVERSITY
						</h1>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Banner;
