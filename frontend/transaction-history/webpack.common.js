const path = require("path");

module.exports = {
  output: {
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    alias: {
      "react-native$": "react-native-web",
    },
    extensions: [".tsx", ".ts", ".js"],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
