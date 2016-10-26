var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
       loaders: [
         {
           test: /(\.jsx|\.js)$/,
           loader: 'babel',
           exclude: /(node_modules)/,
           include: path.join(__dirname, 'src'),
           query: {
             presets: ['react', 'es2015']
           }
         }
       ]
     },
     resolve: {
       root: path.resolve('./'),
       extensions: ['', '.js', '.jsx']
     },
     plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
}
