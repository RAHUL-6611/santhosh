import React, { Fragment, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

import { HiAcademicCap } from "react-icons/hi";

import "./StudentCount.css";

export function CustomCountUp(props) {
	const { end, ...rest } = props;
	const [visible, setVisible] = useState(null);

	const handleOnChange = (isVisible) => {
		setVisible(isVisible);
	};

	return (
		<VisibilitySensor
			active={!visible}
			partialVisibility
			onChange={handleOnChange}
		>
			<CountUp {...rest} end={visible ? end : 0} />
		</VisibilitySensor>
	);
}

export default function StudentCount() {
	return (
		<div className="student-count__container">
			<h1 className="title">PTU by Numbers</h1>
			<div className="student-count__box">
				{[
					"undergraduate students",
					"postgraduate students",
					"Phd scholars",
					"Research scholars",
					"teaching and non-teaching staffs ",
					"administrative faculties ",
					"Award won Projects",
					"inovations by students",
				].map((e) => {
					return (
						<Fragment key={e}>
							<div className="student-count__items" id="">
								<div className="student-count__para">
									<span className="student-count__count">
										<i>
											<HiAcademicCap />
										</i>
										&nbsp;
										<CustomCountUp end={2150} />
									</span>
									<div className="student-count__para-para">
										<p>{e}</p>
									</div>
								</div>
							</div>
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}
