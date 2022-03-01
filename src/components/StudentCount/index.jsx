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
			<CountUp suffix="+" {...rest} end={visible ? end : 0} />
		</VisibilitySensor>
	);
}

export default function StudentCount() {
	return (
		<div className="student-count__container">
			<h1 className="title">PTU by Numbers</h1>
			<div className="student-count__box">
				{[
					{ title: "UG Students", count: 2489, suffix: "" },
					{ title: "PG Students", count: 286, suffix: "" },
					{ title: "Ph.D Scholars", count: 196, suffix: "" },
					{ title: "Faculty", count: 124, suffix: "" },
					{ title: "Supporting Staff", count: 200, suffix: "" },
					{ title: "Start-ups", count: 22, suffix: "+" },
					{ title: "Ongoing Projects", count: 22, suffix: "+" },
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
										<CustomCountUp end={e.count} suffix={e.suffix} />
									</span>
									<div className="student-count__para-para">
										<p>{e.title}</p>
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
