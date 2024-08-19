import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "es",
      name: "FormSnippet",
    },
    {
      dir: "dist",
      format: "cjs",
      entryFileNames: "index.cjs.js",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    postcss({
      extract: true,
      modules: true,
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      extensions: [".js", ".ts", ".tsx"],
    }),
    resolve(),
    commonjs(),
  ],
});
