module.exports = {
    title: 'BaseComponents',
    description: '基础组件简介',
    port: 2222,
    // dest: './dist',   // 设置输出目录
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
            { text: '组件', link: '/baseComponents/TTable/base.md' }
        ],
        sidebar: {
            '/baseComponents/': [
                {
                    title: 'table组件',
                    collapsable: true,
                    children: [
                        // ['TTable/base', 'Table组件基础用法']
                        'TTable/base'
                    ]
                }
            ]
        }
    }
}
