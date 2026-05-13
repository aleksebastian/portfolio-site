import js from '@eslint/js';
import svelteConfig from 'eslint-plugin-svelte';
import tailwindConfig from 'eslint-plugin-tailwindcss';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
	js.configs.recommended,
	...svelteConfig.configs['flat/recommended'],
	tailwindConfig.configs.recommended,
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
		files: ['**/*.ts', '**/*.d.ts'],
		languageOptions: {
			parser: tsParser
		},
		rules: {
			'no-unused-vars': 'off'
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
			'svelte/no-navigation-without-resolve': 'off',
			'tailwindcss/no-custom-classname': 'off',
			'no-undef': 'off' // Disable for Svelte files as types are handled by TypeScript
		}
	},
	{
		files: ['**/*.ts', '**/*.d.ts'],
		rules: {
			'no-unused-vars': 'off'
		}
	},
	{
		ignores: [
			'.DS_Store',
			'node_modules/',
			'build/',
			'.vercel/',
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
