/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				lightGray: '#F3F4F6',
				lightGreen: '#D4F1C4',
				darkBlack: '#353535',
				normalGreen: '#3F7C1D',
				darkGreen: '#D9D9D9',
				lightLemon: '#69CE31',
				containerColor: '#E8EAEE',
			},
		},
	},
	plugins: [],
};
