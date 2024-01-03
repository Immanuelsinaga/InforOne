/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors: {
				primary: "#0BADE1",
				secondary: "#0E7490",
				bluebg: "#ECFEFF",
				darkbg: "#151C29",
			},
			boxShadow: {
				full: "2px 2px 2px -2px rgba(0, 0, 0, 0.2)",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
	fontFamily: {
		inter: ["Inter", "sans-serif"],
		rubik: ["Rubik", "sans-serif"],
		opensans: ["Open Sans", "sans-serif"],
	},
};
