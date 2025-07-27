const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
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
        test: /\.(js|ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host-app",
      remotes: {
        account_overview:
          "account_overview@http://localhost:3001/remoteEntry.js",
        transaction_history:
          "transaction_history@http://localhost:3002/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          eager: true, // ⚠️ Not recommended unless necessary
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
};
