/*
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-05 12:20:15
 */
const htmlplugin = require('html-webpack-plugin') //导入插件得到构造函数
const html = new htmlplugin({ //创建插件实例
    template: './src/index.js', // 指定要用的模板文件
    filename: 'index.html' // 指定生产的文件名称，该文件存在于内存中，在目录中不显示 
})

const VueloaderPlugins  = require('vue-loader/lib/plugin');

const path = require('path')
module.exports = {
    //编译模式  development  production
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'), //输出文件名称
        filename: 'bundle.js' //输出文件名称

    },
    plugins: [html,new VueloaderPlugins()],
    module: { 
        rules: [{//打包css文件
                test: /\.css$/,
                use: ['style-loader', 'css-loader','postcss-loader']
            },
            { //打包less文件
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            { //打包scss文件
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            { //打包css中图片
                test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use:'url-loader?limit=16940' //图片小于16940字节才转base64,否则为url地址加载
            },
            {//高级js打包过滤掉node_modules
                test:/\.js$/,
                use:'babel-loader',exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            }

        ]
    }
}