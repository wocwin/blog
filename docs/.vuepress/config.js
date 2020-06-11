module.exports = {
    title: 'BaseComponents',
    description: '基础组件简介',
    head: [],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/wocwin/my-vuePress',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        nav: [
            { text: '主页', link: '/' },
            { text: 'ns-UI', link: '/ns-ui/logs' },
            { text: '开发规范', link: '/standard/html' }
        ],
        sidebar: {
            '/ns-ui': [
                {
                    title: '开发指南',
                    collapsable: false,
                    children: [
                        '../ns-ui/logs',
                        '../ns-ui/guid',
                        '../ns-ui/install',
                        '../ns-ui/start'
                    ]
                },
                {
                    title: '组件',
                    collapsable: false,
                    children: [
                        ['../ns-ui/searchSelect', 'SearchSelect 选择器']
                    ]
                }
            ],
            '/standard': [
                {
                    title: '前端开发规范',
                    collapsable: false,
                    children: [
                        '../standard/html',
                        '../standard/css',
                        '../standard/js',
                        '../standard/vue',
                        '../standard/eslint'
                    ]
                }
            ]
        }
    }
}
