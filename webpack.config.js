module.exports = {
    entry : './Demograph.js',
    output : {
        path : __dirname,
        filename : 'highchartszoom.js'
    },
    devServer : {
        inline : true,
        host : "0.0.0.0"
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    presets : ['es2015','react']
                }
            }
        ]
    }
}