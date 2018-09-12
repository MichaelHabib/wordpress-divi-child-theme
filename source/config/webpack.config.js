module.exports = {
    // configurations here
    context: path.resolve(__dirname, 'src'),
    entry: {
        // removing 'src' directory from entry point, since 'context' is taking care of that
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/[name].bundle.js'
    },

    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                        loader: "style-loader"
                    }, {
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
            }]
    }
};
