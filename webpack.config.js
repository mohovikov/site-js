const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, "main.js"),
  output: {
    filename: 'script.min.js',
    path: path.resolve(__dirname, "../static/js"),
  },
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
