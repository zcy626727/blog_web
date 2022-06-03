const webpack = require("webpack");

module.exports = {
    // 关闭es校验
    lintOnSave: false,
    publicPath: '/blog',
    outputDir: 'blog',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        port: process.env.port || 8800, // dev port
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: "http://localhost:4000", //设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' //这里理解成用'/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替
                }
            },
        }
    },
    chainWebpack: config => {
        config.module
            .rule('')
            .test(/\.md$/)
            .use('html-loader')
            .loader('html-loader')
            .end()
            .use('markdown-loader')
            .loader('markdown-loader')
            .end()
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...
            config.mode = 'production';
            config["performance"] = { //打包文件大小配置
                "maxEntrypointSize": 10000000,
                "maxAssetSize": 30000000
            }
        }
    },

};