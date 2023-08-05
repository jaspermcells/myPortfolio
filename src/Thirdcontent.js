import React from "react";
import Callsvg from "./pictures/callsvg.svg";
import Facebooksvg from "./pictures/facebooksvg.svg";
import Instagramsvg from "./pictures/instagramsvg.svg";
import Comradzaudition from "./pictures/comradz_audition.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Comradzshirt from "./pictures/comradzshirt.png";
import Comradzwsb from "./pictures/comradzwsb.jpg";
function thirdcontent() {
	return (
		<div
			className="lg:h-auto  lg:w-full  lg:top-40 grid lg:grid-flow-row sm:grid-flow-col sm:grid-cols-1 sm:grid-rows-1  lg:grid-cols-2 lg:grid-rows-2  md:grid-cols-2 md:grid-rows-2 md:top-18 md:h-1/4 md:w-1/2 md:grid-cols-1  md:grid-flow-col md:top-28  sm:grid-flow-col m-auto z-30 gap-12 mt-72    sm:grid-cols-1 
		   justify-items-center  bg-red-800  relative p-24  "
		>
			{" "}
			<div
				id="col1"
				className=" grid grid-cols-3  grid-rows-3 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1  bg-gray-500 rounded-md shadow-2xl shadow-slate-950  text-white lg:w-1/2 sm:w-3/4"
			>
				<div
					id="AboutUs"
					className=" w-1/2 h-1/4 m-0 font-bold p-10 text-left justify-items-start col-span-2  text-4xl  font-unifrakturCook "
				>
					About Us
				</div>
				<div></div>
				<div
					className="col-span-3 row-span-2 first-letter:justify-items-center lg:text-lg sm:text-sm
				 px-14 font-serif tracking-wide"
				>
					This is the official website of Comradz. You can catch updates from
					our official website. The group competed in various competitions and
					bagged many awards. For bookings and collaboration you can contact us
					+639672279800 or click the contact page.
				</div>
			</div>
			<div className="bg-slate-400 order-2 lg:col-span-1 lg:row-span-2  sm:col-span-1 sm:row-span-1  md:col-span-1 md:row-span-2 rounded-md shadow-2xl shadow-black grid justify-items-center grid-row-5 lg:w-3/4 sm:w-full">
				<h1 className="text-4xl font-unifrakturCook text-red-700 mt-10 ml-10 mb-10">
					{" "}
					Announcements
				</h1>

				<div className=" relative h-full w-full justify-items-center grid-row-4">
					<Carousel
						autoPlay={true}
						interval={2000}
						aria-label="Announcements "
						swipeable={true}
						stopOnHover={true}
					>
						<div className="relative">
							<img src={Comradzaudition} alt="comradz" />
							<p className="legend text-2xl  ">
								Comradz family will have an upcoming audition. Be part of the
								growing family! Audition date will be posted soon. -Uploaded on
								May 27,2023
							</p>
						</div>
						<div>
							<img src={Comradzshirt} alt="" />
							<p className="legend text-4xl  ">
								Comradz Tshirt Merch is up!! Hurry up! Contact us for pre-order.
								-Uploaded on May 27,2023
							</p>
						</div>
						<div>
							<img src={Comradzwsb} alt="comradz wsb" />
							<p className="legend text-4xl  ">
								{" "}
								Comradz won 2nd place out of 65 crews in WSB Asia Mindanao last
								April 23, 2023.
							</p>
						</div>
					</Carousel>{" "}
				</div>
			</div>
			<div className=" order-3 lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1 grid lg:grid-cols-3  lg:grid-rows-3 md:grid-cols-2  lg:w-full md:w-1/2 bg-red-600 rounded-md shadow-2xl shadow-slate-950  text-black ">
				<div className="text-4xl  p-10	font-unifrakturCook ">Contacts</div>
				<div></div>
				<div className="col-span-3 row-span-2 ">
					<ul className=" grid grid-row-3 gap-6  lg:justify-items-center">
						<li className="p-0 w-full h-full m-auto ">
							<a
								href="https://www.facebook.com/thecomradzofficial"
								className="w-full h-full relative  md:right-10 grid grid-cols-2"
								alt=""
							>
								{" "}
								<img
									src={Callsvg}
									alt=""
									className=" w-6 h-8 lg:ml-40 ml-12 absolute	 p-0"
								/>
								<h1 className=" w-full h-16 top-5 text-lg font-serif ml-24">
									0967227 9800
								</h1>
							</a>
						</li>
						<li className="p-0 w-full h-full m-auto">
							{" "}
							<a
								href="https://www.facebook.com/thecomradzofficial"
								className="w-full h-full relative  md:right-10  grid grid-cols-2  justify-items-start"
							>
								<img
									src={Facebooksvg}
									alt=""
									className=" p-0 w-8 h-8 lg:ml-40 ml-12 absolute"
								></img>
								<h1 className=" w-full h-16 top-5 text-lg ml-24 font-serif">
									{" "}
									Facebook Comradz Page
								</h1>
							</a>
						</li>
						<li className="p-0 w-full h-full m-auto">
							<a
								href="https://www.instagram.com/comradz_ph/"
								className="w-full h-full relative  md:right-10  grid grid-cols-2"
							>
								<img
									src={Instagramsvg}
									alt=""
									className="p-0 w-8 h-8 lg:ml-40 absolute ml-12"
								></img>
								<h1 className=" w-full h-16 top-5 text-lg ml-24 font-serif ">
									{" "}
									Instagram Comradz Page
								</h1>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default thirdcontent;
