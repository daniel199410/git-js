const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: Path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: '3000'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}