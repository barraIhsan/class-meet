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
					200: "#1C1C1F"
				}
			},
		},
	},
	plugins: [],
};
