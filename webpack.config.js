const path = require('path');
const HelloPlugin = require('./src/MyPlugin/HelloPlugin');
const CopyPlugin = require('./src/MyPlugin/CopyPlugin');

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
    plugins: [
        new HelloPlugin(),
        new CopyPlugin({
            from: path.resolve(__dirname, 'src/static'),
            to: path.resolve(__dirname, 'dist')
        }),
    ],
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