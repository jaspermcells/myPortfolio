import React from "react";
import myphoto from "./pictures/IMG_0741-removebg-preview.png";
import newmyphoto from "./pictures/IMG_0741_new-removebg-preview.png";
const secondcontent = () => {
	return (
		<div>
			<div className="text-white bg-transparent z-50 w-full grid relative justify-items-center xs:mt-20 lg:mt-28">
				<img
					src={newmyphoto}
					width={400}
					height={300}
					alt="jasper"
					className="z-50 
					"
				></img>{" "}
				<div className="bg-yellow-400 w-40 h-72 absolute rounded-full mb-72 rotate-45 shadow-2xl  shadow-orange-400"></div>
				<div className="bg-orange-400 w-20 h-64 absolute rounded-full mt-56 rotate-45 shadow-2xl shadow-yellow-400 "></div>
			</div>
		</div>
	);
};

export default secondcontent;
