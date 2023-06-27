import React, { useState, useEffect } from "react";
import "./style.css";

function NavBar() {
	return (
		<div
			className=" lg:h-20 bg-black drop-shadow-lg grid lg:grid-cols-2 text-slate-200 justify-items-center items-center justify-center md:grid-cols-1 sm:grid-cols-1 sm:h-60 md:h-50 z-50 shadow-white
      
      "
		>
			<div className="font-unifrakturCook text-slate-200 text-5xl border-white">
				Comradz
			</div>

			<div>
				<ul className=" m-auto grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-10 md:gap-5 sm:gap-3 font-NanumBrush text-2xl ">
					<li> Home </li>
					<li> About </li>
					<li> Contact </li>
				</ul>
			</div>
		</div>
	);
}
export default NavBar;
