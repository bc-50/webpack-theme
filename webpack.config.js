const path = require("path");
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    scripts: "./src/js/index.js",
    styles: "./src/scss/main.scss",
  },
  output: {
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
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   modifyURLPrefix: {
    //     '': '/wp-content/themes/' + path.basename(__dirname) + '/dist'
    //   },
    //   offlineGoogleAnalytics: true
    // }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      proxy: "http://localhost/replace_here",
      open: "external",
      files: [
        "./*.php",
        "./shortcodes/visual-composer/*.php",
        "!./src",
        "./styles.css",
        "./dist",
      ],
    }, {
      reload: false,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
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
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ["file-loader"],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]',
        publicPath: './wp-content/themes/' + path.basename(__dirname) + '/dist/'
      },
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