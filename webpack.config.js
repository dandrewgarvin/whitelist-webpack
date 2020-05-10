const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "public"),
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.PLATFORM": JSON.stringify(env.platform),
      }),
      // dynamically create the public/index.html file based on env.platform
      new HtmlWebpackPlugin({
        hash: true,
        title: env.platform,
        template: "./src/index.html",
        filename: "./index.html", //relative to root of the application
      }),
    ],
  };
};
