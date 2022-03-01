import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/Home";

import "./App.css";

import { IT } from "./pages/departments/It/It";
import { CSE } from "./pages/departments/Cse/Cse";
import { EEE } from "./pages/departments/EEE/Eee"
import { EIE } from "./pages/departments/EIE/Eie"
import { ECE } from "./pages/departments/Ece/Ece"
import { ME } from "./pages/departments/Mech/Mech"
import { Chem } from "./pages/departments/Chem/Chem"
import { Civil } from "./pages/departments/Civil/Civil"
import { Chemistry } from "./pages/departments/Chemistry/Chemistry";
import { Physics } from "./pages/departments/Physics/Physics";
import { Maths } from "./pages/departments/Maths/Maths";
import { HSM } from "./pages/departments/HSM/Hsm";

import Department from "./pages/departments/Department";

const departmentProps = [IT, CSE, EEE,EIE, ME, ECE, Chem, Civil, Chemistry, Physics, Maths, HSM];

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
				<Route path="/*" element={<HomeScreen />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
