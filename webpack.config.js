const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.tsx', 
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.vue', '.json', '.png', '.jpg'],
    },
    module: {
      rules: [
        {
          test: /.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /.tsx?$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: /node_modules/,
        },
        {
          test: /.css$/,
          use: ['style-loader', 'css-loader'], 
      },
        {
          test: /.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource'
      },

      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8080,
  
    },
  };