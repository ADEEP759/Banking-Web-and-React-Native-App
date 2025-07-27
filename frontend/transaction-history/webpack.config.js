const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const commonConfig = require("./webpack.common.js");
const path = require("path"); // Ensure this line is included

module.exports = merge(commonConfig, {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3002,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "transaction_history",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App", // Exposing the App component
      },
      shared: {
        react: {
          singleton: true,
          eager: true, // Use with caution
          requiredVersion: "^18.2.0",
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^18.2.0",
        },
        "react-native-web": {
          singleton: true,
          eager: true,
          requiredVersion: "^0.18.10",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
});
