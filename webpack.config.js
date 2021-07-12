const path = require("path");
const webpack = require('webpack');
//const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  watch: process.env.NODE_ENV == 'development',

  entry: {
    scripts: "./src/js/index.js",
    styles: "./src/scss/main.scss",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    writeToDisk: true,
    hot: true,
    contentBase: path.resolve(__dirname, "../../../"),
    port: 9000,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!**/favicon/*', '!**/favicon', '!**/imgs/*', '!**/imgs']
    }),
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   modifyURLPrefix: {
    //     '': '/wp-content/themes/' + path.basename(__dirname) + '/dist'
    //   },
    //   offlineGoogleAnalytics: true
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    //new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      proxy: "http://localhost/bodycare",
      open: "external",
      files: [
        "./*.php",
        "./**/*.php",
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
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
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
        loader: MiniCssExtractPlugin.loader,
        options: {
          esModule: false,
        }
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
        publicPath: './'
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