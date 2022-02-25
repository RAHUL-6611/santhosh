import React, { useEffect } from "react";
import "./upcoming_events.css";
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
		<div>
			<div class="ue-grand-parent-container">
				<div class="ue-parent-container">
					<div class="ue-top">
						<div class="ue-carousel">
							<div class="slideshow-container">
								<div class="mySlides iden1 fade">
									<div class="numbertext">1 / 4</div>
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37-smNwO3ONQ0D9kNY3ctJyGa6LNpTipqGw&usqp=CAU"
										alt=""
									/>
									<div class="ue-text">Women Development Cell</div>
								</div>

								<div class="mySlides iden1 fade">
									<div class="numbertext">2 / 4</div>
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwdKexFu2ZG0LYRYstLXZZhbAH_CCc5pUlA&usqp=CAU"
										ALT=""
									/>
									<div class="ue-text">Crafts From Waste Competition</div>
								</div>

								<div class="mySlides iden1 fade">
									<div class="numbertext">3 / 4</div>
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeDe7Lq2Q6_0uY03lTgLtPamCf31f3P6WYA&usqp=CAU"
										ALT=""
									/>
									<div class="ue-text">Prize Distribution</div>
								</div>
								<div class="mySlides iden1 fade">
									<div class="numbertext">4 / 4</div>
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KA39gSB6K_48ZdjGZgKcOnK_QdCKzxgu7Q&usqp=CAU"
										ALT=""
									/>
									<div class="ue-text">Refreshment Sports Events</div>
								</div>

								<a class="prev" id="num1" onClick="plusSlides(-1,this.id)">
									&#10094;
								</a>
								<a class="next" id="abc1" onClick="plusSlides(1,this.id)">
									&#10095;
								</a>
							</div>
							<div class="ue-dots">
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
							</div>
						</div>
						<div></div>
						<div class="ue-side-bar">
							<h2>WOMEN CELL EVENTS</h2>
							<hr />
							<ul>
								<li>Cash prices will be awarded</li>
								<li>Certificates will be issued</li>
								<li>Periodic events</li>
							</ul>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
								incidunt in dicta mollitia corrupti. Provident labore in
								repellat? Amet exercitationem sunt nulla quis ea possimus, illum
								quos cum eveniet alias adipisci dignissimos facilis modi laborum
								fugiat vero saepe illo soluta blanditiis molestias accusantium
								eius provident sapiente laudantium? Sapiente, dolor autem.
							</p>
						</div>
					</div>
					<div class="ue-bottom">
						<div class="ue-cards">
							<figure class="snip1527">
								<div class="ue-image">
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4xY0BHdg_AhWLQSttp88coZS5rkuQh-Lmw&usqp=CAU"
										alt="pr-sample25"
									/>
								</div>
								<figcaption>
									<div class="date">
										<span class="day">02</span>
										<span class="month">Mar</span>
									</div>
									<h3>Mehandi Competition</h3>
									<p>
										Mehndi is a form of body art and temporary skin decoration
										from the Indian Subcontinent usually drawn on hands or legs,
										in which decorative designs are created on a person.
									</p>
								</figcaption>
								{/* <a href="#"></a> */}
							</figure>
							<figure class="snip1527">
								<div class="ue-image">
									<img
										src="data:image/jpeg;base64,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"
										alt="pr-sample25"
									/>
								</div>
								<figcaption>
									<div class="date">
										<span class="day">24</span>
										<span class="month">Jun</span>
									</div>
									<h3>Move Your Body</h3>
									<p>
										Dancing can improve your muscle tone, strength, endurance
										and fitness. Dancing is a great way to meet new friends
									</p>
								</figcaption>
								{/* <a href="#"></a> */}
							</figure>

							<figure class="snip1527">
								<div class="ue-image">
									<img
										src="data:image/jpeg;base64,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"
										alt="pr-sample25"
									/>
								</div>
								<figcaption>
									<div class="date">
										<span class="day">03</span>
										<span class="month">Oct</span>
									</div>
									<h3>Atheletics</h3>
									<p>
										I don't need to compromise my principles, because they don't
										have the slightest bearing on what happens to me anyway.
									</p>
								</figcaption>
								{/* <a href="#"></a> */}
							</figure>
							<figure class="snip1527">
								<div class="ue-image">
									<img
										src="data:image/jpeg;base64,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"
										alt="pr-sample25"
									/>
								</div>
								<figcaption>
									<div class="date">
										<span class="day">18</span>
										<span class="month">Oct</span>
									</div>
									<h3>Vocal It Out</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Omnis in voluptates sit porro enim quasi.
									</p>
								</figcaption>
								{/* <a href="#"></a> */}
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
