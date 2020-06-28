module.exports = {
    title: 'wocwin',
    description: '个人技术文档',
    base: '/blog/',
    port: 2222,
    // dest: './dist',   // 设置输出目录
    head: [
        ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `./favicon.ico` }]
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/wocwin/blog',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        nav: [
            { text: '主页', link: '/' },
            { text: '实际项目问题', link: '/projectProblem/permission' },
            { text: '基础组件', link: '/baseComponents/TInput/base' }
        ],
        sidebar: {
            '/projectProblem/': [
                {
                    title: 'Vue项目',
                    collapsable: false,
                    children: [
                        'permission',
                        'keepAlive',
                        'axios'
                    ]
                }
            ],
            '/baseComponents/': [
                {
                    title: '常用组件',
                    collapsable: false,
                    children: [
                        'TInput/base', // input组件
                        'TSearch/base', // 下拉搜索查询组件
                        'TLayout/base', // 布局组件
                        'StepWizard/base', // 步驟组件
                        'TDatePicker/base', // 日期组件
                        'TDialog/base', // 弹窗组件
                        'UploadExcel/base' // 批量上传excel组件
                    ]
                },
                {
                    title: 'TTable组件',
                    collapsable: false,
                    children: [
                        'TTable/base', // 基本
                        'TTable/pagination', // 分页
                        'TTable/checkbox', // 基本复选
                        'TTable/operation', // 操作栏
                        'TTable/filters', // 状态filters方法使用
                        'TTable/help', // 使用帮助(Attributes)
                        'TTable/tree' // TreeTable组件
                    ]
                },
                {
                    title: '图片上传组件',
                    collapsable: false,
                    children: [
                        'UploadFile/base'
                    ]
                }
            ]
        },
        plugins: [
            // ['@vuepress/plugins-back-to-top', false],
            // ['vuepress-plugin-gotop-plus', {
            //     // mobileShow: false,
            //     threshold: 150
            // }],
            // ['vuepress-plugin-code-copy', {
            //     align: 'top',
            //     successText: '复制'
            // }],
            // ['@vuepress/back-to-top']
        ]
    }
}
