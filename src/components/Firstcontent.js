import React from "react";
import iconcontact from "./pictures/reshot-icon-contact-Y7UEDRJZX9.svg";
import iconfb from "./pictures/reshot-icon-facebook-square-GCAE9R73J5.svg";
import iconig from "./pictures/reshot-icon-instagram-DM5FP6S9N2.svg";
import icongoogle from "./pictures/reshot-icon-google-U3H6LWBGDC.svg";
import icongithub from "./pictures/reshot-icon-github-NY46M9DGFU.svg";
import iconlinkedin from "./pictures/reshot-icon-linkedin-G7YJ8FXBKT.svg";

const Firstcontent = () => {
	return (
		<div className="w-full h-72 bg-transparent  grid grid-flow-col justify-items-center font-lilitaOne mt-28 ">
			<div className="text-white mt-10 bg-black w-full grid grid-flow-row grid-row-6 gap-10  ">
				<div className="bg-transparent lg:ml-32 md:ml-10 text-left leading-5 pt-5 h-5  lg:text-3xl xs:text-lg sm:text-2xl font-lilitaOne text-yellow-400 font-semibold xs:justify-self-center sm:justify-self-center lg:justify-self-start md:justify-self-start justify-self-center ">
					{" "}
					Hello!
				</div>
				<div className="bg-transparent lg:ml-32 md:ml-10 lg:text-7xl  sm:text-4xl  xs:text-4xl font-lilitaOne font-extrabold z-50 xs:justify-self-center sm:justify-self-center lg:justify-self-start md:justify-self-start justify-self-center">
					{" "}
					I am Jasper Bergantinos
				</div>
				<div className="bg-transparent w-3/4 lg:ml-32 md:ml-10 font-thin xs:justify-self-center sm:justify-self-center lg:justify-self-start md:justify-self-start justify-self-center text-yellow-200">
					I'm a frontend web developer. I am knowledgeable in HTML, CSS,
					Javascript and frameworks such as Tailwind and ReactJS.
				</div>
				<div className="bg-slate-700 rounded-2xl xs:justify-self-center sm:justify-self-center lg:justify-self-center md:justify-self-start justify-self-center  lg:ml-10 md:ml-8 xs:ml-0 border-yellow-600 border-2 sm:w-3/4 xs:mx-10 w-full xs:w-3/4 ">
					{" "}
					<ul className="grid grid-cols-6 justify-self-center xs:gap-6 w-full xs:w-10/12 xs:ml-6 group ">
						<li className="xs:w-10/12 ">
							<a href=" https://www.facebook.com/jasper.bergantinos">
								<img
									alt="fb"
									src={iconcontact}
									className="w-8 h-8 lg:w-8 lg:h-8 sm:w-5 sm:h-5 lg:ml-5 lg:mr-5  my-2 transform scale-100 hover:scale-150  duration-300 "
								></img>
							</a>
						</li>
						<li className="xs:w-10/12">
							<a href=" https://www.facebook.com/jasper.bergantinos">
								<img
									alt="fb"
									src={iconfb}
									className="w-8 h-8 lg:w-8 lg:h-8 sm:w-5 sm:h-5 lg:ml-5 lg:mr-5 my-2 transform scale-100 hover:scale-150 duration-300"
								></img>
							</a>
						</li>
						<li className="xs:w-10/12">
							<a href=" https://www.facebook.com/jasper.bergantinos">
								<img
									alt="fb"
									src={iconig}
									className="w-8 h-8 lg:w-8 lg:h-8 sm:w-5 sm:h-5 lg:ml-5 lg:mr-5 my-2 transform scale-100 hover:scale-150 duration-300 "
								></img>
							</a>
						</li>
						<li className="xs:w-10/12">
							<a href=" https://www.facebook.com/jasper.bergantinos">
								<img
									alt="fb"
									src={icongoogle}
									className="w-8 h-8 lg:w-8 lg:h-8 sm:w-5 sm:h-5 lg:ml-5 lg:mr-5  my-2 transform scale-100 hover:scale-150 duration-300 "
								></img>
							</a>
						</li>
						<li className="xs:w-10/12">
							<a href=" https://www.facebook.com/jasper.bergantinos">
								<img
									alt="fb"
									src={icongithub}
									className="w-8 h-8 lg:w-8 lg:h-8  sm:w-5 sm:h-5 lg:ml-5 lg:mr-5  my-2 transform scale-100 hover:scale-150  duration-300 "
								></img>
							</a>
						</li>
						<li className="xs:w-10/12">
							<a href=" https://www.facebook.com/jasper.bergantinos">
								<img
									alt="fb"
									src={iconlinkedin}
									className="w-8 h-8 lg:w-8 lg:h-8 sm:w-5 sm:h-5 lg:ml-5 
									  lg:mr-5   my-2 transform scale-100 hover:scale-150 duration-300 "
								></img>
							</a>
						</li>
					</ul>
				</div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Firstcontent;
