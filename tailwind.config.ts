/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				blue: {
					1: "#201658",
					2: "#1D24CA",
					3: "#98ABEE",
				},
			},
		},
		fontFamily: {
			onest: ["Onest", "sans-serif"],
		},
	},
	plugins: [],
};
