const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = env => {
  if (!env) {
    env = {}
  }
  let plugins=[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template: './app/views/index.html'}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ];
  if(env.production){
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new ExtractTextPlugin("style.css", {ignoreOrder: true})
    )
  }
  return {
    entry: {
      app: './app/js/main.js'
    },
    devServer: {
      contentBase: './dist',
      hot: true,
      compress: true,
      port: 9000,
      clientLogLevel: "none",
      quiet: true
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        }, {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            cssModules: {
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              camelCase: true
            },
            extractCSS: true,
            loaders: env.production?{
              css: ExtractTextPlugin.extract({use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader'}),
              scss: ExtractTextPlugin.extract({use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader'})
            }:{
              css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
              scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
            }
          }
        }, /*{
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }*/
          {
              test: /\.scss$/,
              use:[
                  'vue-style-loader',
                  {
                      loader: 'css-loader',
                      options: {
                          // 开启 CSS Modules
                          modules: true,
                          // 自定义生成的类名
                          localIdentName: '[local]_[hash:base64:8]'
                      }
                  }, {
                      loader: 'px2rem-loader',
                      // options here
                      options: {
                          remUni: 40,
                          remPrecision: 8
                      }
                  },
                  'sass-loader'
              ]
          },{
              test: /\.css$/,
              use: [
                  process.env.NODE_ENV !== 'production' ?
                      'vue-style-loader' :
                      MiniCssExtractPlugin.loader,
                  'css-loader'
              ]
          }
      ]
    },
    resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    mode:'production',
    plugins,
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};
