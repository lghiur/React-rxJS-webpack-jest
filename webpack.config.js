var path = require('path'),
  webpackLoaders = require('./webpack/webpack-loaders'),
  plugins = require('./webpack/plugins'),
  server = require('./webpack/server'),
  webpackConfig;

webpackConfig = {
  entry: {
    app: [
      './app/main.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'rxjs/Rx',
      'history',
      'stampit'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  module: {
    preLoaders: webpackLoaders.preLoaders,
    loaders: webpackLoaders.loaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    root: [path.join(__dirname)],
    modulesDirectories: [
      'node_modules'
    ]
  },
  eslint: {
    configFile: '.eslintrc',
    emitError: true,
    failOnError: true
  },
  plugins:  plugins,
  devtool: "#inline-source-map",
  devServer: server
};

if(process.argv.indexOf('--production') === -1) {
  webpackConfig.entry.app.unshift('webpack/hot/dev-server');
  webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:3000');
}

module.exports = webpackConfig;
