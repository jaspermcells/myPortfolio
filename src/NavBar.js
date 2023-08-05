import React, { useState, useEffect } from "react";
import "./style.css";

function NavBar() {
	var [scrolled, setScrolled] = useState(false);
	var [showMenu, setShowMenu] = useState(false);
	var [showButton, setShowButton] = useState(false);
	useEffect(() => {
		var handleScroll = () => {
			if (window.scrollY > 100) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};
		handleScroll();

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	var toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<div
			className={` sticky lg:h-24 bg-black drop-shadow-lg grid lg:grid-cols-2 text-slate-200 justify-items-center items-center justify-center md:grid-cols-1 sm:grid-cols-1 sm:h-60 md:h-50 z-50 shadow-white
        top-0  py-4 px-8 ${scrolled ? "py-2" : "py-4"}`}
		>
			<div className="font-unifrakturCook text-slate-200 text-5xl border-white">
				Comradz
			</div>

			<button
				className={`block lg:hidden bg-red-500 text-white py-2 px-4 rounded mt-6 ${
					showButton ? "block" : "hidden"
				}`}
				onClick={toggleMenu}
			>
				{showMenu ? "Close" : "Menu"}
			</button>

			{showMenu && (
				<ul className=" m-auto grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-10 md:gap-5 sm:gap-3 font-NanumBrush text-2xl text-center">
					<li> Home </li>
					<li> About </li>
					<li> Contact </li>
				</ul>
			)}
		</div>
	);
}
export default NavBar;
