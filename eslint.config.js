import { defineConfig } from 'eslint/config';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
    { extends: ['exlint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'] },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    {
        rules: {
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],
        },
    },
    pluginJs.configs.recommended,
    eslintPluginPrettier.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
]);
