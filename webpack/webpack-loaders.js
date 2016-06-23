var webpackLoaders = {},
  reactHot,
  babel,
  eslint,
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  extractCSS,
  imageLoader,
  fontLoader,
  woffLoader,
  excludeFolders = /(node_modules|bower_components|build|gulp)/;

reactHot = {
  test: /\.js?$/,
  exclude: excludeFolders,
  loaders: ['react-hot']
};

eslint = {
  test: /\.js$/,
  exclude: excludeFolders,
  loader: 'eslint-loader'
};

babel = {
  test: /\.js?$/,
  exclude: excludeFolders,
  loader: 'babel',
  query: {
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['transform-runtime']
  }
};

imageLoader = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  exclude: excludeFolders,
  loaders: [
    'file?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
  ]
};

woffLoader = {
  test: /\.(woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  exclude: excludeFolders,
  loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[hash].[ext]"
};

fontLoader = {
  test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  exclude: excludeFolders,
  loader: "file-loader"
};

extractCSS = {
  test: /\.scss$/i,
  exclude: excludeFolders,
  loader: ExtractTextPlugin.extract(['css', 'resolve-url', 'sass?sourceMap'])
};

webpackLoaders.loaders = [
  babel,
  extractCSS,
  imageLoader,
  fontLoader,
  woffLoader
];
webpackLoaders.preLoaders = [];

if(process.argv.indexOf('--production') === -1) {
  webpackLoaders.loaders.unshift(reactHot);
  webpackLoaders.preLoaders.push(eslint);
}

module.exports = webpackLoaders;
