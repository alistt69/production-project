import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import globals from 'globals';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import storybook from 'eslint-plugin-storybook';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import i18next from 'eslint-plugin-i18next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tsEslint.config(
  {
    ignores: ['**/dist', '**/node_modules', '**/storybook-static'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        IS_DEV: true,
      },
    },
  },
  eslint.configs.recommended,
  {
    ...reactRecommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    plugins: {
      'react-hooks': reactHooks,
      storybook: storybook,
      i18next: i18next,
    },
    rules: {
      // React rules
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',

      // TypeScript rules
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-this-alias': [
        'error',
        {
          allowedNames: ['self'],
        },
      ],

      // Import rules
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',

      // General rules
      indent: ['error', 2],
      'no-unused-vars': 'warn',
      'no-shadow': 'off',
      'no-underscore-dangle': 'off',
      'no-param-reassign': 'off',
      'max-len': ['error', { ignoreComments: true, code: 120 }],

      // Accessibility rules
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // i18next rules
      /*'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          ignoreAttribute: ['data-testid', 'to'],
        },
      ],*/
    },
  },
  {
    files: ['**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'storybook/hierarchy-separator': 'off',
      'storybook/default-exports': 'off',
    },
  },
  ...tsEslint.configs.recommended,
  prettierConfig,
  ...compat.config({ extends: ['plugin:storybook/recommended'] }),
);
