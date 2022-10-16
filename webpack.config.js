const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //Donde esta el punto de entrada de la aplicacion
	entry: './src/index.js',
	output: {
        //Donde va a vivir el proyecto cuando este listo ejem build, main o dist
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
    mode: 'development',

    
	resolve: {
        //Reconocer archivos con extension
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
                    {
                        loader: 'html-loader'
                    }
                ]
			},
            {
                test: /\.s[ac]ss$/i,
				use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
				]
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
        new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
    devServer:{
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3005
    }
}