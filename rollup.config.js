import typescript from "@rollup/plugin-typescript";

/** @type {import('rollup').RollupOptions} */
const options = {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    exports: "named",
    sourcemap: true,
  },

  plugins: [
    typescript({
      declaration: true,
      declarationDir: "dist",
      include: "src/**/*.ts",
    }),
  ],
};

export default options;
