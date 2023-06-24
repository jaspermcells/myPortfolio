import "./style.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const images = [
		"./pictures/melvin1.jpg",
		"./pictures/melvin2.jpg",
		"./pictures/melvin3.jpg",
		// Add more image URLs as needed
	];
	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};
	const currentImage = images[currentIndex];

	return (
		<div className="flex justify-center items-center">
			<img src={currentImage} alt="" className="w-full max-w-md" />

			<button
				className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded"
				onClick={prevSlide}
			>
				Previous
			</button>

			<button
				className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded"
				onClick={nextSlide}
			>
				Next
			</button>
		</div>
	);
};

export default ImageSlider;
