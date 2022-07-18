const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const openBrowser = require("react-dev-utils/openBrowser");

const DEV_URL = "http://localhost:8080";

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    onAfterSetupMiddleware: () => {
      if (!openBrowser(DEV_URL)) {
        openBrowser(DEV_URL);
      }
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dev"),
    clean: true,
  },
});
