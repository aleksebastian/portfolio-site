import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import svelteConfig from 'eslint-plugin-svelte';
import tailwindConfig from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import ts from 'typescript-eslint';

export default defineConfig([
	globalIgnores(['build/', '.svelte-kit/', '.vercel/', 'package/']),
	js.configs.recommended,
	ts.configs.recommended,
	svelteConfig.configs['flat/recommended'],
	tailwindConfig.configs.recommended,
	prettier,
	{
		settings: {
			tailwindcss: {
				cssConfigPath: './src/app.css'
			}
		},
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
			],
			'svelte/no-navigation-without-resolve': 'off',
			'tailwindcss/classnames-order': 'off', // prettier-plugin-tailwindcss sorts classes
			'tailwindcss/no-custom-classname': 'off',
			'no-undef': 'off' // TypeScript handles undefined names
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	}
]);
