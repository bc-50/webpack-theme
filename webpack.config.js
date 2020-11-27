const path = require("path");
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    scripts: "./src/index.js",
    styles: "./src/scss/main.scss",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    writeToDisk: true
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!index.html', '!**/favicon/*', '!**/favicon']
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [{
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
          }
        },
      },
      {
        loader: "sass-loader",
      },
      ],
    },
    {
      test: /\.html$/,
      use: [{
        loader: "html-loader",
      },],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ["file-loader"],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"],
    },
    {
      test: /\.(csv|tsv)$/,
      use: ["csv-loader"],
    },
    {
      test: /\.xml$/,
      use: ["xml-loader"],
    },
    ],
  },
};