const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/app.jsx',
  mode: 'production', // | 'development' | 'none'
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/, // you may add "vendor.js" here if you want to
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
      minChunks: 2,
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devServer: {
    inline: true,
    port: 9090,
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash',
      classNames: 'classnames',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'cheap-module-eval-source-map',
};
