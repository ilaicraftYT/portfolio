/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Inter'
			}
		}
	},
	plugins: [require('@catppuccin/tailwindcss'), require('@tailwindcss/typography')]
};
