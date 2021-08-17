module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./ts-src/index.ts",
  output: {
    path: `${__dirname}/src`,
    filename: "index.js",
    library: { type: "commonjs" },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
