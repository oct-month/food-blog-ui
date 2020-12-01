module.exports = {
    devServer: {
        host: 'localhost',
        port: '8088'
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#1DA57A',
                        'link-color': '#1DA57A',
                        'border-radius-base': '2px'
                    },
                    javascriptEnabled: true
                }
            }
        }
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
