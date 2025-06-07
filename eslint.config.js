import js from '@eslint/js';
import svelteConfig from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

export default [
	js.configs.recommended,
	...svelteConfig.configs['flat/recommended'],
	prettier,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				browser: true,
				es2021: true,
				node: true
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	},
	{
		files: ['**/*.cjs'],
		languageOptions: {
			sourceType: 'commonjs',
			globals: {
				module: 'readonly',
				process: 'readonly',
				require: 'readonly'
			}
		}
	},
	{
		rules: {
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'no-undef': 'off' // Disable for Svelte files as types are handled by TypeScript
		}
	},
	{
		ignores: [
			'.DS_Store',
			'node_modules/',
			'build/',
			'.svelte-kit/',
			'package/',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock'
		]
	}
];
