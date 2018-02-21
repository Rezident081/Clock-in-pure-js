const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/js/common.js',
  output: {
      filename: 'js/[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'autoprefixer-loader', 'sass-loader'],
        })
      },
      {
        test: /\.(woff|eot|ttf|svg|otf)$/,
        loader: 'file-loader',
        options: {
          name: "fonts/[name].[ext]"
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new UglifyJSPlugin(),
    new HtmlPlugin({
        title: "Clock js",
        template: "./src/index.html"
    })
  ]
};