const path = require("path");
module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, //percorrer e achar arquivos js
        use: ["babel-loader"],
      },
    ],
  },
  watch: true, //assistir alterações

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    liveReload: true,
  },
};
