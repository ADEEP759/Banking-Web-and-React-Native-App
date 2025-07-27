const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    publicPath: "auto",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ui_kit",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
        "./Card": "./src/Card",
        "./Text": "./src/Text",
        "./View": "./src/View",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.2.0",
            eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.2.0",
            eager: true,
        },
      },
    }),
  ],
};
