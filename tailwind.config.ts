/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundSize: {
				"size-180": "180% 180%",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-linear": "linear-gradient(207deg,#d086f2,#faf7fd)",
			},
			backgroundColor: {
				glassmorphism: "rgba(255, 255, 255, 0.2)",
			},
			boxShadow: {
				glassmorphism: "0 4px 30px rgba(0, 0, 0, 0.1)",
			},
			backdropBlur: {
				glassmorphism: "blur(10.2px)",
			},
			colors: {
				purple: {
					1: "#81006F",
					2: "#5E004F",
					3: "#4B003F",
					4: "#D19AC3",
					5: "#FC86E2",
					6: "#FFF4FF",
					7: "#EDD3ED",
					8: "#613F75",
					9: "#7D82B8",
					10: "#5c62a6",
				},
			},
			keyframes: {
				moving: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
			},
			animation: {
				moving: "moving 24s ease infinite",
			},
		},
		fontFamily: {
			onest: ["Onest", "sans-serif"],
		},
	},
	plugins: [],
};
