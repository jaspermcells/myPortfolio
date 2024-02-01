/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				unifrakturCook: ["UnifrakturCook"],
				lilitaOne: ["Lilita", "One"],
			},
			screens: {
				xs: "360px",
			},
		},
	},
	plugins: [],
};
