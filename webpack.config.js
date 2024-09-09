const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.tsx', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: isProd ? '/game-review-site/' : '/', // Dynamic publicPath based on the environment
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: './dist', // Serve static files from 'dist'
    historyApiFallback: true, // This is what fixes the issue
    port: 3000, // Your development server's port
  },
};
