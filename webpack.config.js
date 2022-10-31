const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    loader: 'my-loader.js',
                    options: {
                        replaceStr: "! replaced by myloader !"
                    }
                }
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'md-loader'
                    }
                ]
            }
        ]
    },
    resolveLoader: {
        modules: ['node_modules', './src/MyLoader']
    },
    devServer: {
        contentBase: './dist',
        overlay: {
            warnings: true,
            errors: true,
        },
        open: true,
    },
}