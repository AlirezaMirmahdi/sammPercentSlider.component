var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helpers.root('src', 'tsconfig.json')
                        }
                }, 'angular2-template-loader'
              ]
          },
            {
                test: /\.html$/,
                loader: 'html-loader'
          },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
          },    
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract({
                    use: 'raw-loader!sass-loader?includePaths[]=' + helpers.root('src', 'app'),
                })
            },
            {
                test: /\.(css|less)$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap'
                })
          },
//            {
//                test: /\.less$/,
//                use: extractLess.extract({
//                    use: [{
//                        loader: "css-loader"
//                    }, {
//                        loader: "less-loader"
//                    }],
//                    // use style-loader in development
//                    fallback: "style-loader"
//                })
//            }
            {
                test: /\.(css|less)$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader'
          }
        ]
    },

    plugins: [
//        new WebpackCleanupPlugin({
//            exclude: ["images/**/*"],
//        }),

    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
    ),

    new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        }),

    new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

    new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ]
};