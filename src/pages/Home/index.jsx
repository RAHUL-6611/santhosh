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

function Home() {
	return (
		<div>
			<Header />
			<Banner />
			<NewsFlash />
			<SmallCarousel />
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
