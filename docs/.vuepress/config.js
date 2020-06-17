module.exports = {
    title: 'BaseComponents',
    description: '基础组件简介',
    base: '/blog/',
    port: 2222,
    // dest: './dist',   // 设置输出目录
    head: [],
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
            { text: '组件', link: '/baseComponents/TTable/base' }
        ],
        sidebar: {
            '/baseComponents/': [
                {
                    title: 'table组件',
                    collapsable: true,
                    children: [
                        'TTable/base', // 基本
                        'TTable/pagination', // 分页
                        'TTable/checkbox', // 基本复选
                        'TTable/operation', // 操作栏
                        'TTable/filters', // 状态filters方法使用
                        'TTable/help' // 使用帮助(Attributes)
                    ]
                },
                {
                    title: '布局组件',
                    collapsable: true,
                    children: [
                    ]
                },
                {
                    title: '日期组件',
                    collapsable: true,
                    children: [
                    ]
                },
                {
                    title: '弹窗组件',
                    collapsable: true,
                    children: [
                    ]
                }
            ]
        }
    }
}
