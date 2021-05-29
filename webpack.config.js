const path = require('path');

module.exports = {
  entry: [
    './src/index.ts',
  ],
  mode: 'development',
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },
  resolve: {
    extensions: ['ts', 'js'],
  },
  devServer: {
    contentBase: './dist',
  },
};
