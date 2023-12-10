import {defineUserConfig} from 'vuepress'
import {defaultTheme} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '勇往直前的博客',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        logo: '/images/logo.png',
        navbar: [
            {
                text: 'Java', children: [
                    {text: 'Java基础', link: '/md/java/basic/'},
                    {text: 'Java集合', link: '/md/java/collection/'},
                    {text: 'Java并发', link: '/md/java/concurrent/'},
                    {text: 'JVM', link: '/md/java/jvm/'},
                    {text: 'Java IO', link: '/md/java/io/'},
                    {text: 'Java特性', link: '/md/java/feature/'},
                ]
            },
            {text: 'MAC实操', link: '/md/mac/mac.md'},
            {text: '关于', link: '/md/about/me/about/about.md'}
        ],
    }),
    head: [['link', {rel: 'icon', href: '/images/logo.png'}]],
})