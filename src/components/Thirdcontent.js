import React from "react";
import firstpic from "./pictures/IMG_7743_2-removebg-preview.png";
import secpic from "./pictures/gg-removebg-preview.png";
import thirdpic from "./pictures/IMG_0741_new-removebg-preview.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Pic3svg } from "../components/pictures/IMG_0741_new-removebg-preview.svg";
import { ReactComponent as Pic1svg } from "../components/pictures//IMG_7743_2-removebg-preview.svg";
import { ReactComponent as Pic2svg } from "../components/pictures/gg-removebg-preview.svg";
const thirdcontent = (props) => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 1000,
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
		<div className="w-full h-full pb-10 bg-transparent grid  xl:grid-cols-1 justify-items-center items-center text-4xl font-extrabold tracking-widest font-lilitaOne text-yellow-500   shadow-slate-500 xl:pt-10 relative lg:w-10/12 lg:ml-36 lg:justify-items-center xl:w-10/12">
			<div
				className="relative w-full   grid justify-items-center items-center
		 h-10 mt-28"
			>
				{" "}
				About Me
			</div>
			<div className="w-10/12 h-full bg-transparent relative grid xl:grid-flow-row xl:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 justify-items-center items-center pt-10 gap-32  lg:grid-flow-row lg:grid-cols-2 	 xs:mr-36 ">
				<div className="  	  bg-transparent  w-full  h-full xl:w-full xl:h-10/12 lg:w-full lg:h-10/12  md:w-1/2 md:h-3/4 shadow-lg sm:w-3/4 sm:h-3/4 xs:w-3/4 xs:h-3/4 ">
					<div className="w-full	 h-full border-r-4 border-t-4 border-orange-800 relative rounded-lg shadow-md shadow-orange-500 bg-transparent xl:w-3/4">
						<div className="w-3/4 h-full bg-transparent sm:mr-72  mt-10 ml-48  border-r-4 border-t-4 border-solid border-orange-900 shadow-xl shadow-orange-700 absolute rounded-lg xl:w-10/12 xl:h-10/12"></div>
						<Slider {...settings} className="relative  ">
							<div className="  relative bg-transparent">
								<Pic1svg className="  w-10/12 h-10/12  xs:h-3/4 xs:mt-20 absolute fill-current xs:ml-16 ml-28 mb-72  bg-transparent" />
								<img
									src={firstpic}
									alt="jasperito"
									className="relative  bg-transparent "
								></img>
							</div>
							<div className="relative ">
								<Pic2svg className="w-10/12 absolute fill-current ml-28 mb-72" />
								<img
									src={secpic}
									alt="jasperito"
									className="relative bg-transparent"
								></img>
							</div>

							<div className="relative">
								<Pic3svg className="w-10/12 absolute  fill-current ml-28 mb-72 " />
								<img
									src={thirdpic}
									alt="jasperito"
									className="relative bg-transparent"
								></img>
							</div>
						</Slider>
					</div>
				</div>
				<div className=" bg-transparent  w-full h-full shadow-lg xl:shadow-orange-700 hover:shadow-2xl hover:shadow-yellow-500 xs:shadow-orange-600 lg:shadow-orange-600 md:shadow-orange-700 sm:shadow-orange-800 rounded-lg grid grid-cols-1 text-lg text-white  tracking-wider font-light items-center justify-items-center relative pb-10 font-sans lg:w-full  ml-36  transition duration-500">
					<div className="w-10/12 h-auto leading-9 relative my-10 text-center items-center justify-items-stretch">
						My name is Jasper Bergantinos. I am passionate in designing websites
						and develop front-end stuffs. I have acquired the required skills to
						become a front-end developer. I love to hone my skills more as a
						developer.
					</div>
					<div
						className="w-full h-3/4 grid text-center text-white	
 lg:grid-cols-2 md:grid-cols-1  xs:grid-cols-1 xs:gap-3"
					>
						<div className=" font-lilitaOne font-extrabold">
							Name
							<div className=" text-yellow-400 text-sm w-full h-full">
								{props.person.name}
							</div>
						</div>
						<div className="  font-lilitaOne font-extrabold">
							phone
							<div className=" text-yellow-400 text-sm">
								{props.person.contact}
							</div>
						</div>
						<div className=" font-lilitaOne font-extrabold">
							country
							<div className=" text-yellow-400 text-sm">
								{props.person.country}
							</div>
						</div>
						<div className=" font-lilitaOne font-extrabold">
							email
							<div className=" text-yellow-400 xs:text-sm text-xs ">
								{props.person.email}
							</div>
							{"	 "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default thirdcontent;
