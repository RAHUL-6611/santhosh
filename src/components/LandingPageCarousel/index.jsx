import React, { useEffect } from "react";
import "./stylaa.css";
import admin from "./PEC_admin_block.gif";
import screen1 from "./ptuInauguration_screen1.jpg";
import screen4 from "./ptuInauguration_screen4.jpg";
import audi from "./pec-auditorium.jpg";
import inaug from "./ptuInauguration.jpg"
import hands from "./ptuInauguration_vicePresSpeech.jpg"


var slideIndex = 1;
function plusSlides(n, className) {
	showSlides((slideIndex += n), className);
}

function currentSlide(n, className) {
	showSlides((slideIndex = n), className);
}
function showSlides(n, className) {
	// console.log(className)
	var num = className.charAt(className.length - 1);
	// console.log(num)
	var i;
	var slides = document.getElementsByClassName(`iden${num}`);
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

const index = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		showSlides(slideIndex, "abc1");
		setInterval(() => {
			plusSlides(1, "abc1");
		}, 5000);
	}, []);

	return (
		
			<div class="ue-grand-parent-container">
				<div class="ue-parent-container">
					<div class="ue-top">
						<div class="ue-carousel">
							<div class="slideshow-container">
								<div class="mySlides iden1 fade">
									{/* <div class="numbertext">1 / 6</div> */}
									
									<img
										src={inaug}
										alt=""
										className="landingImage"
									/>
									{/* <div class="ue-text">Women Development Cell</div> */}
								</div>
								<div class="mySlides iden1 fade">
									{/* <div class="numbertext">2 / 6</div> */}
									
									<img
										src={hands}
										alt=""
										className="landingImage"
									/>
									{/* <div class="ue-text">Women Development Cell</div> */}
								</div>
								<div class="mySlides iden1 fade">
									{/* <div class="numbertext">3 / 6</div> */}
									
									<img
										src={audi}
										alt=""
										className="landingImage"
									/>
									{/* <div class="ue-text">Women Development Cell</div> */}
								</div>

								<div class="mySlides iden1 fade">
									{/* <div class="numbertext">6 / 6</div> */}
									
									<img
										src={screen1}
										alt=""
										className="landingImage"
									/>
									{/* <div class="ue-text">Crafts From Waste Competition</div> */}
								</div>

								<div class="mySlides iden1 fade">
									{/* <div class="numbertext">5 / 6</div> */}
									
									<img
										src={screen4}
										ALT=""
										className="landingImage"
									/>
									{/* <div class="ue-text">Prize Distribution</div> */}
								</div>
								<div class="mySlides iden1 fade">
									{/* <div class="numbertext">6 / 6</div> */}
									
									<img
										src={admin}
										ALT=""
										className="landingImage"
									/>
									{/* <div class="ue-text">Refreshment Sports Events</div> */}
								</div>
{/* 
								<a class="prev" id="num1" onClick="plusSlides(-1,this.id)">
									&#10094;
								</a>
								<a class="next" id="abc1" onClick="plusSlides(1,this.id)">
									&#10095;
								</a> */}
							</div>
							{/* <div class="ue-dots">
								<span
									class="dot idendot1"
									id="css1"
									onClick="currentSlide(1,this.id)"
								></span>
								<span
									class="dot idendot1"
									id="cse1"	
									onClick="currentSlide(2,this.id)"
								></span>
								<span
									class="dot idendot1"
									id="cst1"
									onClick="currentSlide(3,this.id)"
								></span>
								<span
									class="dot idendot1"
									id="csd1"
									onClick="currentSlide(4,this.id)"
								></span>
							</div> */}
						</div>
						<div></div>
								</div>
								</div>
								</div>
								
	);
};

export default index;
