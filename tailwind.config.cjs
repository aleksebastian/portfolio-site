/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media', // Use system preference for dark mode
	options: {
		keyframes: true
	},
	theme: {
		extend: {
			colors: {
				accent: '#F5F500', // TODO: Approve this acid yellow accent or change it
				dark: {
					100: '#1e1e1e',
					200: '#0a0a0a'
				}
			},
			gridTemplateColumns: {
				resume: '6fr 1fr',
				cards: 'repeat(auto-fill, minmax(17rem, 1fr))'
			},
			minHeight: {
				0: '0',
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
				full: '100%'
			},
			maxHeight: {
				0: '0',
				'1/4': '25%',
				'1/2': '50%',
				'3/4': '75%',
				full: '100%'
			},
			transitionProperty: {
				top: 'top'
			},
			backgroundPosition: {
				mockup: '75% 100%'
			},
			objectPosition: {
				mockup: '75% 100%'
			},
			fontFamily: {
				display: ['Space Grotesk', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			boxShadow: {
				card: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
				scrolledNav: 'rgba(0, 0, 0, 0.08) 0px 1px 12px'
			}
		}
	}
};
