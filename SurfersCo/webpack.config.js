const path = require('path');
module.exports = {
  entry: './development/webpackEntry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.css$/,
      use:['style-loader','css-loader']
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },{
  test: /\.(png|jpg)$/,
  loader: 'url-loader'
}
  ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },{
  test: /\.(png|jpg)$/,
  loader: 'url-loader'
}
    ]
  },
  resolve: {
    extensions: [ '.js', '.json']
  }
}
