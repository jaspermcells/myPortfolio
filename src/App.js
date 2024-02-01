import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import "./index.css";
import Firstcontent from "./components/Firstcontent";
import Secondcontent from "./components/Secondcontent";
import Thirdcontent from "./components/Thirdcontent";
import Fourthcontent from "./components/FourthContent";
import Dropdown from "./components/Dropdown";
import Card from "./components/Card";
function App() {
	const options = ["Option 1", "Option 2", "Option 3"];

	const aboutMe = {
		name: "Jasper Bergantinos",
		contact: "09451547044",
		country: "Philippines",
		email: "jasperbergantinos3@gmail.com",
	};

	return (
		<React.Fragment>
			<div className="bg-black w-full h-full relative grid grid-cols-1 pb-40">
				<Navbar />
				<div className="bg-black grid xl:grid-flow-col xl:grid-cols-2  md:grid-flow-col sm:grid-flow-row xs:grid-flow-row md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 lg:grid-flow-col grid-cols-2 drop-shadow-2xl shadow-orange-800">
					<Firstcontent />
					<Secondcontent />
				</div>
				<Thirdcontent person={aboutMe} />
				<Fourthcontent />

				<div className="flex justify-center items-center h-screen bg-transparent">
					<div className="grid grid-cols-3 gap-4"></div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
