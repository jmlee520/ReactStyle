module.exports = {
    entry:'./app/app.jsx',
    output:{
        path: __dirname,
        filename:'./public/bundle.js'
    },
    resolve:{
        root:__dirname,
        alias:{
         Container:'app/components/Container.jsx',
         Form:'app/components/Form.jsx',
         Message:'app/components/Message.jsx'
        },
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/

            }
        ]
    }


};