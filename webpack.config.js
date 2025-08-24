const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  entry: path.resolve(__dirname, "main.js"),
  output: {
    filename: 'script.min.js',
    path: path.resolve(__dirname, "../static/js"),
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        "!bootstrap-bbcode/**"
      ],
    }),
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
