const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ts = {
  test: /\.(ts)x?$/,
  loader: require.resolve("babel-loader"),
  exclude: [/node_modules/],
};

const js = {
  test: /\.(js)x?$/,
  loader: require.resolve("babel-loader"),
  exclude: [/node_modules/],
};

const css = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    { loader: "css-loader", options: { importLoaders: 1, modules: true } },
    "postcss-loader",
  ],
};

const imgs = {
  test: /\.(jpeg|jpg|png|gif|webp|svg)$/i,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "images/",
        esModule: false,
      },
    },
  ],
};

const etc = {
  loader: require.resolve("file-loader"),
  exclude: [/\.(js|mjs|jsx|ts|tsx|svg|html|json|svg)$/, /\.(sc|c)ss$/],
  options: {
    name: "static/media/[name].[hash:8].[ext]",
    esModule: false, // fix problem with img [object Module] in browser
  },
};

module.exports = {
  context: path.resolve(__dirname),
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.jsx"],
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
    chunkFilename: "[name].bundle.js",
  },
  devServer: {
    port: 6802,
    open: true,
    hot: true,
    watchContentBase: true,
    progress: true,
    contentBase: path.join(__dirname, "dist"),
    writeToDisk: true,
    overlay: true,
    historyApiFallback: true, // on 404 load publicPath => for BrowserRouter on refresh
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    modules: ["node_modules"],
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      "@": path.resolve(__dirname, "/src"),
    },
  },
  module: {
    rules: [ts, js, css, imgs, etc],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "assets", "index.html"),
      title: "Journal",
    }),
    new MiniCssExtractPlugin(),
  ],
};
