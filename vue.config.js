module.exports = {
    devServer: {
        host: 'localhost',
        port: '8088'
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    img: 'src',
                    image: 'xlink:href',
                    'b-avatar': 'src',
                    'b-img': 'src',
                    'b-img-lazy': ['src', 'blank-src'],
                    'b-card': 'img-src',
                    'b-card-img': 'src',
                    'b-card-img-lazy': ['src', 'blank-src'],
                    'b-carousel-slide': 'img-src',
                    'b-embed': 'src'
                }
                return options
            })
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            title: '主页'
        },
        login: {
            entry: 'src/pages/login/loginEntry.js',
            template: 'public/login.html',
            title: '登录'
        },
        register: {
            entry: 'src/pages/register/registerEntry.js',
            template: 'public/register.html',
            title: '注册'
        }
    }
}
