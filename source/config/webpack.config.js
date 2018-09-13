'use strict'; // eslint-disable-line
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyGlobsPlugin = require('copy-globs-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

//const extractSASS = new ExtractTextPlugin('assets/scss/[name]-extractSASS.css');
var config = {
    paths: {
//        root: "../../",
//        source: "source/",
//        dist: "assets/",
    },
    enabled: {
        sourceMaps: true
    }
};
config.paths.root = path.resolve(__dirname, `../../`);
config.paths.source = path.join(`${config.paths.root}`, `source`);
config.paths.dist = path.join(`${config.paths.root}`, `assets`);
//module.exports = {
let webpackConfig = {
//
// configurations here
    context: config.paths.root,
    mode: 'development',
    entry: {
        // removing 'src' directory from entry point, since 'context' is taking care of that
        app: './source/js/custom.js',
//        custom_scss: './source/scss/custom.scss',
    },
    output: {
        path: config.paths.dist,
        filename: `./js/[name].js`
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './js/[name].js',
                        }
                    },
                ],
            },
//            {
//                test: /\.css$/,
//                use: [
//                    {
//                        loader: 'file-loader',
//                        options: {
//                            name: 'css/[name].css',
//                        }
//                    },
//                    ExtractTextPlugin.extract({
//                        fallback: "style-loader",
//                        use: "css-loader"
//                    })
//                ]
//            },
            {
                test: /\.scsss$/,
                use: ExtractTextPlugin.extract({
//                    fallback: 'style-loader',
                    use: [
//                        {
//                            loader: 'file-loader',
//                            options: {
//                                name: 'css/[name].scss.css',
//                            }
//                        },
//                        {
//                            loader: "style-loader",
//                        }, // creates style nodes from JS strings
                        {
                            loader: "css-loader", // translates CSS into CommonJS
                        },
                        {
                            loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
                            options: {
                                name: 'css/[name].sass-loader.css',
                                includePaths: [`${config.paths.source}scss`],
//                                sourceMap: config.enabled.sourceMaps,
//                                sourceComments: true,
                            }
                        }
                    ],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("custom.css"),
        new CleanWebpackPlugin([
            'dist',
            'build',
            'assets'
        ], {
            root: `${config.paths.root}`,
            exclude: ['shared.js'],
            verbose: true,
            dry: false
        }),
    ]
};
/*
 * ********************************************
 * Create & push config per module into webpackConfig.module
 */

/*  config_SCSS  */
let config_scss = {
    test: /\.scss$/,
    include: config.paths.source,
    use: ExtractTextPlugin.extract({
        fallback: 'style',
        use: [
            {loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])}
        ],
    }),
};
//webpackConfig.module.rules.push(config_scss);
//webpackConfig.module.rules.push(JSON.stringify(config_scss));


/*
 * ********************************************
 * Create & push plugins into webpackConfig.plugins
 */
let plugins_extractText = new ExtractTextPlugin({// define where to save the file
    filename: 'dist/[name].bundle.css',
    allChunks: true
});
//webpackConfig.plugins.push(plugins_extractText);
/*
 * ********************************************
 * export webpackConfig
 */

//console.log(webpackConfig);
module.exports = webpackConfig;