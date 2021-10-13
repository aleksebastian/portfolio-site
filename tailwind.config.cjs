module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: 'media',
	theme: {
		extend: {
			gridTemplateColumns: {
				2: '6fr 1fr'
			}
		}
	}
};
