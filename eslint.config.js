import { ESLint } from "eslint";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

const eslint = new ESLint({
  overrideConfig: {
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: "@typescript-eslint/parser",
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    ignores: ["node_modules", "dist"],
    files: ["**/*.{js,jsx,ts,tsx}"],
  },
});

export default eslint;
