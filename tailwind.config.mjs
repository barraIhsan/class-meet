/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "selector",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
			},
			colors: {
				gray: "#4B4B4B",
				darkGray: "#1C1C1F",
				blue: "#31A8FF",
				red: "#E83239",
				green: "#85D732",
				darkGreen: "#62A121",
				cream: "#FFEDAE",
				brown: "#92754B",
				darkBrown: "#7E6541"
			},
			screens: {
				"no-hover": { raw: "(hover: none)" }
			},
			borderRadius: {
				"3xl": "20px"
			},
		},
	},
	plugins: [],
	safelist: [
		"row-span-2",
		"row-span-3",
		"flex-col",
		"flex-row",
		"lg:flex-row-reverse",
		"w-[80%]",
		"w-[82%]",
		"w-[84%]",
		"w-[86%]",
		"w-[88%]",
		"w-[90%]",
		"w-[92%]",
		"w-[94%]",
		"w-[96%]",
		"w-[98%]",
		"w-[100%]",
	],
};
