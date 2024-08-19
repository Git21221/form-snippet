import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import { defineConfig } from "rollup";

function removeUseClientDirective() {
  return {
    name: 'remove-use-client-directive',
    transform(code, id) {
      if (id.includes('node_modules/@mui/styled-engine/GlobalStyles')) {
        return code.replace(/'use client';/g, '');
      }
    },
  };
}

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
    terser(),
    replace({
      preventAssignment: true,
      "use client": "",
    }),
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
