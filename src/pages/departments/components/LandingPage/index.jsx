import React from "react";
import Testimonial from "../testimonial";
import About from "../About";
import Notice from "../Notice";
import Vision from "../Vision";
import HodCard from "../hod";
import NewsFlash from "../../../../components/NewsFlash";

const DeptLandingPage = ({ value }) => {
	return (
		<div>
			<HodCard value={ value } />
			<NewsFlash />
			<About value={ value } />
			<Vision value={ value } />
			<Notice />
			{/* <Testimonial /> */}
		</div>
	);
};

export default DeptLandingPage;
