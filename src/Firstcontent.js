import React, { useState } from "react";
import "./style.css";
import comradz2 from "./pictures/comradz2.mp4";

function Firstcontent() {
	const text =
		" A fast growing dance group that is centered in Davao City, Philippines. The group is founded by Mr. Melvin Mejos 2020. ";
	const [showFullText, setShowFullText] = useState(false);

	const toggleText = () => {
		setShowFullText(!showFullText);
	};
	return (
		<div className="w-full m-auto  grid grid-cols-1 ">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute lg:top-0 left-0 w-full h-45 object-cover z-0 grayscale md:top-24 sm:top-40 "
			>
				<source src={comradz2} type="video/mp4" />
			</video>
			<div className=" relative lg:top-36 md:top-22 sm:top-16 w-3/4 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-center m-auto font-unifrakturCook  tracking-wider ">
				<div className="text-red-700 lg:text-9xl z-30  font-bold  drop-shadow-lg  md:text-8xl sm:text-3xl grid grid-cols-1 sm:text-center lg:text-left ">
					{" "}
					Comradz
					<div className="text-red-500  lg:text-lg sm:text-xs font-serif mt-3 lg:w-auto ">
						<p className={`${showFullText ? "block  " : "truncate "}`}>
							{text}
						</p>
						<button
							onClick={toggleText}
							className="text-black hover:underline bg-white lg:py-2 lg:px-4 sm:py-1 sm:px-2 sm:text-xs rounded border border-black hover:bg-black hover:text-white md:text-xs lg:text-sm"
						>
							{showFullText ? "Read Less" : "Read More"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Firstcontent;
