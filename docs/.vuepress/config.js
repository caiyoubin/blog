module.exports = {
    markdown: {
        lineNumbers: true,  //是否在每个代码块的左侧显示行号
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: 'reco',
    title: '博客',
    description: 'caiyoubin的博客',
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'links',
                items: [
                    { text: 'Github', link: 'https://github.com/caiyoubin' },
                    { text: '51CTO', link: 'https://blog.51cto.com/u_4942954' }
                ]
            }
        ],
        // 侧边栏配置
        sidebar: [
            {
                title: '导航栏',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "首页内容", path: "/" }
                ]
            },
            {
                title: "文章导航",
                path: '/note/windows端口被占用解决方法', // 默认激活的选项
                collapsable: false, // 不折叠
                children: [
                    { title: "windows端口被占用解决方法", path: "/pages/windows端口被占用解决方法" },
                ],
            }
        ]


    },
    plugins: [
        '@vuepress/medium-zoom',    //zooming images like Medium（页面弹框居中显示）
        '@vuepress/nprogress',  //网页加载进度条
        '@vuepress/plugin-back-to-top', //返回页面顶部按钮
    ]
}