import React, { useState, useEffect } from "react";
import "./style.css";

function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<div
			className=" sticky lg:h-20 bg-black drop-shadow-lg grid lg:grid-cols-2 text-slate-200 justify-items-center items-center justify-center md:grid-cols-1 sm:grid-cols-1 sm:h-60 md:h-50 z-50 shadow-white
      
      "
		>
			<div className="font-unifrakturCook text-slate-200 text-5xl border-white">
				Comradz
			</div>

			<div
				className={` top-0 left-0 w-full bg-black p-4 shadow ${
					scrolled ? "py-2" : "py-4"
				}`}
			>
				<button
					className={"block lg:hidden bg-red-500 text-white py-2 px-4 rounded"}
					onClick={toggleMenu}
				>
					{showMenu ? "Close" : "Menu"}
				</button>
			</div>
			{showMenu && (
				<ul className=" m-auto grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-10 md:gap-5 sm:gap-3 font-NanumBrush text-2xl ">
					<li> Home </li>
					<li> About </li>
					<li> Contact </li>
				</ul>
			)}
		</div>
	);
}
export default NavBar;
