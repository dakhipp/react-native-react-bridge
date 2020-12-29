import typescript from "@rollup/plugin-typescript";
import path from "path";
import pkg from "./package.json";

const mainDir = path.dirname(pkg.main);
const moduleDir = path.dirname(pkg.module);

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
      },
      {
        file: pkg.module,
        format: "es",
      },
    ],
    plugins: [typescript()],
  },
  {
    input: "src/web/index.ts",
    output: [
      {
        file: `${mainDir}/web/index.js`,
        format: "cjs",
      },
      {
        file: `${moduleDir}/web/index.mjs`,
        format: "es",
      },
    ],
    plugins: [typescript()],
  },
  {
    input: "src/plugin/index.js",
    output: [
      {
        file: `${mainDir}/plugin/index.js`,
        format: "cjs",
      },
    ],
  },
];
