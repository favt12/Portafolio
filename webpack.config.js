const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')


const ruleForJavaScript = 
    {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: [
                [
                    '@babel/preset-react',
                    {
                        runtime: 'automatic'
                    }
                ]
            ]
        }
    }
const ruleForStyle = 
    {
        test: /\.css$/i,
        /** use: [MiniCssExtractPlugin.loader,"css-loader"], **/
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: "./",
                }
            },
            "css-loader",
        ]
    }
const ruleforFilename = 
    {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: ["file-loader?name=assets/[name].[ext]"],
    }
const rules = [ruleForStyle,ruleForJavaScript,ruleforFilename]   

module.exports = (env, argv) => {
    const {mode} = argv
    const isProduction = mode === 'production'

    return {
        entry: './src/index.js',
    output: {
        filename: isProduction 
            ? '[name].[contenthash].js' 
            : 'main.js',
        path: path.resolve(__dirname, 'dir'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {rules},
    plugins:[
        new HtmlWebpackPlugin ({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin ()
        
    ]
    }
}