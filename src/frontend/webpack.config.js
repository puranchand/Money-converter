module.exports = {
  entry: [
    './src/frontend/index.js'
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }

    ]

  },
  
  output: {
    path: __dirname + 'src/frontend/dist',
    publicPath: '/',
    filename: 'bundle.js'

  },
  devServer: {
    contentBase: './src/frontend/dist',
    historyApiFallback: true
  },
  
};