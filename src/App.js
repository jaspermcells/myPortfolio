import React from "react";

import "./App.css";
import NavBar from "./NavBar";
import Firstcontent from "./Firstcontent";
import "./style.css"; // import the styles

import Secondcontent from "./Secondcontent";

import Thirdcontent from "./Thirdcontent";
function App() {
	return (
		<React.Fragment>
			<div className="grid grid-cols-1 bg-black">
				<NavBar />
				<Firstcontent />

				<Secondcontent />
				<div className=" bg-transparent relative w-full h-auto mt-72 pt-40 pb-0 text-white text-center justify-items-start content-start ">
					<div className="absolute w-full h-auto white z-50 text-bold text-6xl text-center m-0 border-4 border-x-0 border-red-700 left-0 font-unifrakturCook">
						{" "}
						Est. mmxx
					</div>
				</div>
				<Thirdcontent />
			</div>
		</React.Fragment>
	);
}

export default App;
