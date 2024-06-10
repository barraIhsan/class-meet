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
				gray: {
					100: "#4B4B4B",
					200: "#1C1C1F",
				},
			},
			screens: {
				"no-hover": {
					raw: "(hover: none)",
				},
			},
		},
	},
	plugins: [],
	safelist: [
		"col-span-3",
		"col-span-5",
		"row-span-2",
		"row-span-3",
		"row-span-4",
		"flex-col",
		"flex-row",
		"flex-row-reverse"
	]
};
