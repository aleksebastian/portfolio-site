module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
			gridTemplateColumns: {
				2: '3fr 1fr'
			}
		}
	}
};
