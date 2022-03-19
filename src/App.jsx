import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/Home";

import "./App.css";

import { IT } from "./pages/departments/It/It";
import { CSE } from "./pages/departments/Cse/Cse";
import { EEE } from "./pages/departments/EEE/Eee";
import { EIE } from "./pages/departments/EIE/Eie";
import { ECE } from "./pages/departments/Ece/Ece";
import { ME } from "./pages/departments/Mech/Mech";
import { Che } from "./pages/departments/Che/Che";
import { Civil } from "./pages/departments/Civil/Civil";
import { Chemistry } from "./pages/departments/Chemistry/Chemistry";
import { Physics } from "./pages/departments/Physics/Physics";
import { Maths } from "./pages/departments/Maths/Maths";
import { HSS } from "./pages/departments/HSS/Hss";
import { MBA } from "./pages/departments/MBA/MBA";

import Department from "./pages/departments/Department";
import ChancellorMessage from "./pages/ChancellorsMessage/Chancellor";
import ViceChancellorMessage from "./pages/ChancellorsMessage/ViceChancellor";

const departmentProps = [
	IT,
	CSE,
	EEE,
	EIE,
	ME,
	ECE,
	Che,
	Civil,
	Chemistry,
	Physics,
	Maths,
	HSS,
	MBA,
];

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<HomeScreen />} />
				{departmentProps.map((department, index) => {
					return (
						<Route
							key={index}
							path={department.basePath + "/*"}
							element={<Department department={department} />}
						/>
					);
				})}
				<Route path="/vc-message" element={<ViceChancellorMessage />} />
				<Route path="/chancellor-message" element={<ChancellorMessage />} />
				<Route path="/*" element={<HomeScreen />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
