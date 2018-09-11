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
    }
};
