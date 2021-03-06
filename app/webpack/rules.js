// webpack rules by name
'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const DEV = process.env.NODE_ENV !== 'production'

const CSS_MODULE_LOADER = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[name]__[local]__[hash:base64:5]'
  }
}

module.exports = {
  // babel loader for JSX
  babel: {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
      }
    }
  },

  // worker loader for inline webworkers
  worker: {
    test: /worker\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'worker-loader',
      options: {
        inline: true,
        fallback: false
      }
    }
  },

  // global CSS files
  globalCss: {
    test: /\.global\.css$/,
    use: DEV
      ? ['style-loader', 'css-loader']
      : ExtractTextPlugin.extract({use: 'css-loader', fallback: 'style-loader'})
  },

  // local CSS (CSS module) files
  localCss: {
    test: /^((?!\.global).)*\.css$/,
    use: DEV
      ? ['style-loader', CSS_MODULE_LOADER]
      : ExtractTextPlugin.extract({use: CSS_MODULE_LOADER})
  },

  // handlebars HTML templates
  handlebars: {
    test: /\.hbs$/,
    use: 'handlebars-loader'
  },

  // fonts
  // TODO(mc, 2017-09-12): Add other font-types to the regex if we need them
  fonts: {
    test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader'
  },

  // common image formats (url loader)
  images: {
    test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/,
    use: 'url-loader'
  }
}
