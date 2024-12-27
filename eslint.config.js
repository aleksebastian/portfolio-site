export default {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
	plugins: ['svelte4'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte4/svelte4',
			parser: 'svelte-eslint-parser'
		}
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest' // Use 'latest' for modern ES versions in ESLint v9
	},
	env: {
		browser: true,
		es2021: true, // Update to the latest ES environment available
		node: true
	},
	ignorePatterns: [
		'.DS_Store',
		'node_modules',
		'/build',
		'/.svelte-kit',
		'/package',
		'.env',
		'.env.*',
		'!.env.example',
		'pnpm-lock.yaml',
		'package-lock.json',
		'yarn.lock'
	]
};
