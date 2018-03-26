const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
  entry: `${APP_DIR}/app.jsx`,
  mode: 'development', // 'production' | 'development' | 'none'
  //   optimization: {
  //     splitChunks: {
  //       cacheGroups: {
  //         vendor: {
  //           test: /node_modules/, // you may add "vendor.js" here if you want to
  //           name: 'vendor',
  //           chunks: 'initial',
  //           enforce: true
  //         }
  //       },
  //       minChunks: 2
  //     }
  //   },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/dist/',
    crossOriginLoading: 'use-credentials'
  },
  devServer: {
    inline: true,
    port: 9090
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.(scss|css|less)/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: './'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash',
      classNames: 'classnames'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.join(__dirname, '..', 'components'),
      assets: path.join(__dirname, '..', 'assets'),
      css: path.join(__dirname, '..', 'css')
    }
  },
  devtool: 'cheap-module-eval-source-map'
};
