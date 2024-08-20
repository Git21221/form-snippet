import { ESLint } from 'eslint';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

// Create an instance of ESLint with the necessary configuration
const eslint = new ESLint({
  overrideConfig: {
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: '@typescript-eslint/parser', // Specify the parser here
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ['node_modules', 'dist'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Your custom rules here
    },
  },
});

export default eslint;
