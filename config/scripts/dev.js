const pkg = require('../../package.json')
const base = require('../base.config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendyError = require('friendly-errors-webpack-plugin')

const webpackConfig = merge.smart({}, base, {
    plugins: [
        new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}),
        new FriendyError()
    ]
})

const compiler = webpack(webpackConfig)

compiler.watch({aggregateTimeout: 300, poll: true}, function (error, stats) {
    if (error) {console.log(error); process.exit(1)}
})