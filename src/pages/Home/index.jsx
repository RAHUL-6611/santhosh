import AboutPTU from "../../components/AboutPTU";
import StudentCount from "../../components/StudentCount";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsFlash from "../../components/NewsFlash";
import NewsPTU from "../../components/NewsPTU";
import SmallCarousel from "../../components/SmallCarousel";
import CampusLifeOne from "../../components/CampusLife";
import CarouselHold from "../../components/DepartmentsCarousel";
import Vc from "./Vc";
import ProVc from "./ProVc";
import Chance from "./Chance";
import { Routes, Route } from "react-router-dom";
function Home() {
	return (
		<div>
			<Header />
			<Banner />
			<NewsFlash />
			<SmallCarousel />
			<Routes>
				<Route path="/vc"
					element={
						<Vc />
					}/>
				<Route path="/pro-vc"
					element={
						<ProVc />
					}/>
				<Route path="/chancellor"
					element={
						<Chance />
					}/>
			</Routes>
			<AboutPTU />
			<NewsPTU />
			<CarouselHold />
			<StudentCount />
			<CampusLifeOne />
			<Footer />
		</div>
	);
}

export default Home;
