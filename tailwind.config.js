/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				unifrakturCook: ["UnifrakturCook"],
				NanumBrush: ["Nanum Brush Script"],
			},
		},
		screens: {
			xs: "480px",
			// => @media (min-width: 640px) { ... }
		},
		plugins: [
			// eslint-disable-next-line no-undef
		],
	},
};
