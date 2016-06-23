var plugins,
  htmlPlugin,
  hotPlugin,
  uglify,
  variables,
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  textPluginInstance = require('./common-plugins').textPluginInstance,
  webpack = require('webpack'),
  env = process.argv.indexOf('--production') === -1 ? 'development' : 'production';

htmlPlugin = new HtmlWebpackPlugin({
  title: 'Orchestrated Energy Admin',
  hash: true,
  template: 'app/index.html'
});

commonChunks = new webpack.optimize.CommonsChunkPlugin({
  name : 'vendor',
  filename: "vendors.js",
  minChunks: Infinity
});

uglify = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  mangle: {
    dedupe: true,
    minimize: true,
    except: ['$', 'exports', 'require']
  }
});

variables = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(env)
  }
});

hotPlugin = new webpack.HotModuleReplacementPlugin();

plugins = [
  htmlPlugin,
  commonChunks,
  variables,
  textPluginInstance
];

if(process.argv.indexOf('--production') === -1) {
  plugins.push(hotPlugin);
} else {
  plugins.push(uglify);
}

module.exports = plugins;
