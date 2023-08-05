import React from "react"; //, { useState, useEffect }//
import "./style.css";
import melvin1 from "./pictures/melvin1.jpg";
import melvin2 from "./pictures/melvin2.jpg";
import melvin3 from "./pictures/melvin3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Secondcontent() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="bg-black lg:top-40 md:top-18 w-full m-auto h-full z-30 relative mt-72 grid grid-cols-1  justify-items-center  lg:top-60 md:top-30 sm:top-0 ">
			<div className=" ml-8 mt-24 h-3/4 grid grid-cols-1 text-5xl text-red-700  tracking-wide font-bold font-unifrakturCook z-50 ">
				{" "}
				Meet the Choreographer
			</div>

			<div className="  grid lg:grid-cols-2 lg:w-3/4 md:w-1/2 sm:w-1/2 xs:w-1/2 md:grid-cols-1 sm:grid-cols-1   bg-black p-0  z-50 	">
				<div className=" grid grid-cols-1 lg:w-full xs:1/2 sm:3/4  h-1/4 rounded-l-2xl z-0 ">
					<Slider {...settings}>
						<div>
							<img
								src={melvin1}
								alt=""
								className="w-full xs:1/2 h-1/2 rounded-l-2xl relative"
							/>
						</div>
						<div>
							<img
								src={melvin2}
								alt=""
								className="w-full h-1/2 rounded-l-2xl relative "
							/>
						</div>
						<div>
							<img
								src={melvin3}
								alt=""
								className="w-full h-1/2 rounded-l-2xl relative "
							/>
						</div>
					</Slider>
				</div>
				<div className=" bg-red-800 backdrop-opacity-95  w-full h-auto  font-bold text-center    rounded-r-2xl grid grid-cols-1 text-white drop-shadow-xl gap-0  relative ">
					{" "}
					<div
						id="choreoName "
						className=" mt-10 font-NanumBrush  lg:text-5xl md:text-4xl  sm:text-3xl  h-4 relative"
					>
						Melvin Mejos{" "}
					</div>
					{/*	<div className=" grid grid-cols-1 relative top-0 "> */}{" "}
					<ul className=" grid  justify-items-start font-NanumBrush justify-start text-start  lg:ml-14 md:ml:10 sm:ml-4 lg:text-2xl md:text-lg  list-outside ">
						<li>Director/Founder of Comradz and Swag A-Rea</li>
						<li>Teacher/Mentor at The Hub Dance Center</li>
						<li>Former Member/Choreographer of Dsquared Cru</li>
						<li>Member/Choreographer of Kindred</li>
						<li>Vibe Ph 2017 (2nd Place)</li>
					</ul>
					<ul className=" grid 	 justify-items-start font-NanumBrush justify-start text-start  lg:ml-14 md:ml:10 sm:ml-4 lg:text-2xl md:text-lg  list-outside">
						<li>Vibe Ph 2017 (2nd Place)</li>
						<li>WSB 2018 Monster Crew Mindanao Leg (3rd Place)</li>
						<li>​United Dance Organization (UDO) Champion U18 </li>
						<li>Dance in Step China (Champion)</li>
						<li>Wonju Dynamic Dancing Carnival 2018 (People’s Choice Award)</li>
						<li>
							Wonju Dynamic Dancing Carnival Foreign 2021 (Korea) 3rd Place{" "}
						</li>
						<li>UDO Thailand 2023 Qualifier</li>
						<li>WSB ASIA 2023 Open Division 1st runner up</li>
					</ul>
					{/*</div>*/}
				</div>
			</div>
		</div>
	);
}

export default Secondcontent;
