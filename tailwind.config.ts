import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui'],
				anton: ['"Anton"', 'sans-serif']
			}
		}
	},

	plugins: []
} satisfies Config;