import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: [
            "**/*.{js,mjs,cjs,ts,jsx,tsx}"
        ],

        languageOptions: {
            globals: globals.browser,
        },

        rules: {
            "indent": [2, 4],
        },
    },
    i18next.configs['flat/recommended'],
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
];