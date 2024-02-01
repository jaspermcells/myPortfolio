import React from "react";
import { ReactComponent as Webdesignicon } from "./pictures/reshot-icon-pen-tool-LCMSVR8HBE.svg";
import { ReactComponent as Brandingicon } from "./pictures/reshot-icon-digital-marketing-LBRZ9M6K5S.svg";
import { ReactComponent as Uiicon } from "./pictures/reshot-icon-user-QLCUYJBKM3.svg";

const FourthContent = () => {
	return (
		<div className="grid grid-flow-row w-full h-full  bg-transparent text-white ">
			<div className="w-full h-full grid text-center justify-self-center mt-20">
				<div className="text-3xl font-lilitaOne tracking-widest font-bold ">
					{" "}
					My Services
				</div>

				<div className="grid grid-flow-row    grid-cols-3 lg:grid-cols-3  xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 l justify-self-center w-10/12 gap-6 ">
					<div className="w-full rounded-sm bg-gray-800 grid justify-items-center gap-8  group  hover:cursor-pointer">
						<Webdesignicon className="rounded-full  border-orange-900 text-center border-2 w-12 h-12 mt-10  group-hover:animate-bounce " />{" "}
						<div className="uppercase text-2xl font-lilitaOne ">Web Design</div>
						<div className="w-10/12 mb-20">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
							pulvinar massa. Etiam feugiat interdum sagittis. In in varius
							tortor. Sed in nibh pretium, rhoncus sapien vitae, convallis
							augue. Phasellus pretium augue sed tortor rutrum dignissim.
							Vivamus ut nisl erat. Nullam sed auctor nisl. Vivamus erat turpis,
							lobortis tempor ex vitae, dapibus gravida nisl. Morbi quam libero,{" "}
						</div>
					</div>
					<div className="w-full rounded-sm bg-gray-800  grid justify-items-center gap-8 group  hover:cursor-pointer">
						<Brandingicon className="rounded-full  border-orange-900 text-center border-2 w-12 h-12 mt-10 group-hover:animate-bounce" />
						<div className="uppercase  text-2xl font-lilitaOne 	">Branding </div>
						<div className="w-10/12  mb-20">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
							pulvinar massa. Etiam feugiat interdum sagittis. In in varius
							tortor. Sed in nibh pretium, rhoncus sapien vitae, convallis
							augue. Phasellus pretium augue sed tortor rutrum dignissim.
							Vivamus ut nisl erat. Nullam sed auctor nisl. Vivamus erat turpis,
							lobortis tempor ex vitae, dapibus gravida nisl. Morbi quam libero,{" "}
						</div>
					</div>
					<div className="w-full rounded-sm bg-gray-800 grid justify-items-center group  hover:cursor-pointer">
						<Uiicon className="rounded-full border-orange-900 border-2 w-12 h-12 mt-10  group-hover:animate-bounce " />{" "}
						<div className="uppercase  text-2xl font-lilitaOne">
							User Interface
						</div>
						<div className="w-10/12  mb-20">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
							pulvinar massa. Etiam feugiat interdum sagittis. In in varius
							tortor. Sed in nibh pretium, rhoncus sapien vitae, convallis
							augue. Phasellus pretium augue sed tortor rutrum dignissim.
							Vivamus ut nisl erat. Nullam sed auctor nisl. Vivamus erat turpis,
							lobortis tempor ex vitae, dapibus gravida nisl. Morbi quam libero,{" "}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FourthContent;
