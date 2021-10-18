module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.svelte'],
		options: {
			keyframes: true
		}
	},
	darkMode: 'media',
	theme: {
		extend: {
			gridTemplateColumns: {
				2: '6fr 1fr'
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
			fontFamily: {
				body: ['Heebo', 'sans-serif']
			}
		}
	}
};
