import React from "react";

import "./CANDCURR.css";

export default function Courses() {
	return (
		<div className="course">
			<div class="ccParent">
				<div class="MTech">
					<div class="ccCard">
						<h2 class="cctitle">B.Tech</h2>
						<p>
							A Bachelor of Technology is an undergraduate academic degree
							conferred after the completion of a three-year, a four-year or a
							five-year program of studies at an accredited university or
							accredited university-level institution.
						</p>
						<button class="cc-see-more">Download Syllabus</button>
					</div>
					<div class="ccCard">
						<h2 class="cctitle">M.Tech</h2>
						<p>
							MTech Computer Science is a two-year duration postgraduate level
							programme pursued in different specializations. Computer Science
							is a knowledge and practical skills based programme that imparts
							students with job ready computer science knowledge.
						</p>
						<button class="cc-see-more text-center">Download Syllabus</button>
					</div>
				</div>
				<hr />

				<hr />
				<div class="MCA">
					<div class="ccCard">
						<h2 class="cctitle">MCA</h2>
						<p>
							MCA full form Master of Computer Application is a postgraduate
							course that trains the students about the various aspects of
							computer programs, application software, computer architecture,
							operating systems and many more. The duration of the course is for
							a period of 2 years See Also: Full Form of Computer Application
							Courses
						</p>

						<button class="cc-see-more">Download Syllabus</button>
					</div>
					<div class="ccCard">
						<h2 class="cctitle">Ph.D</h2>
						<p>
							The PhD in CSE The doctoral degree, i.e. the Ph.D., is primarily
							intended for students desiring a career in research and/or
							collegiate teaching. The focus is on advanced EECS topics, on
							learning to perform research and to write research papers, and on
							making fundamental new contributions to an EECS topic.
						</p>

						<button class="cc-see-more">Download Syllabus</button>
					</div>
				</div>
			</div>
		</div>
	);
}
