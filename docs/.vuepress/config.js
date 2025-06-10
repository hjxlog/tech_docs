import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',
    base: '/tech_docs/',
    head: [
        ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,700'}], // 添加中文字体
        ['meta', {charset: 'utf-8'}]
    ],

    title: 'IT 技术宝典',
    description: '包含：Java 核心知识，Java 高级特性，数据库与持久化，Web 开发，分布式系统，DevOps 与工具，测试与质量保证，安全知识，架构设计，软技能，云计算与大数据，LLM，AI Agent ...',

    theme: defaultTheme({
        logo: '/img/logo.jpg',
        navbar: [
            {
                text: 'Java',
                prefix: '/Java/',
                children: [
                    {
                        text: 'Java 基础知识',
                        link: 'basics/Java语言基础.md',
                    },
                ]
            },
            {
                text: 'Python',
                prefix: '/Python/',
                children: [
                    {
                        text: 'Python 基础',
                        link: 'python_basics.md',
                    },
                    {
                        text: 'Python 高阶',
                        link: 'python_advanced.md',
                    },
                ]
            },
            {
                text: 'ElasticSearch',
                prefix: '/ElasticSearch/',
                children: [
                    {
                        text: 'ES 基础',
                        link: 'ES_Basics.md',
                    },
                ]
            },
            {
                text: '工具',
                link: '/Tools/overview.md',
            },
            {
                text: '思考',
                link: '/Thought/overview.md',
            },
            {
                text: 'AI',
                link: '/AI/basics_concept.md',
            },
            {
                text: '网络',
                link: '/Network/理解白名单机制：谁的资源谁做主.md',
            },
        ],

        // 可折叠的侧边栏
        sidebar: {
            '/Java/': [
                {
                    text: 'Java 基础知识',
                    prefix: 'basics/',
                    collapsible: true,
                    children: [
                        {
                            text: 'Java 语言基础',
                            link: 'Java语言基础'
                        },
                    ],
                },
            ],
            '/Python/': [
                {
                    text: 'Python 基础',
                    link: 'python_basics'
                },
                {
                    text: 'Python 高阶',
                    link: 'python_advanced'
                },
            ],
            '/Tools/': [
                {
                    text: '工具',
                    collapsible: true,
                    children: [
                        {
                            text: '概览',
                            link: 'overview'
                        },
                        {
                            text: 'IDEA',
                            link: 'IDEA'
                        },
                    ],
                },
            ],
            '/Thought/': [
                {
                    text: '概览',
                    link: 'overview'
                },
                {
                    text: 'AI应用落地过程中的数据治理',
                    link: 'AI应用落地过程中的数据治理'
                },
            ],
            '/AI/': [
                {
                    text: 'AI基础知识',
                    link: 'basics_concept'
                },
            ],
            '/Network/': [
                {
                    text: '理解白名单机制：谁的资源谁做主',
                    link: '理解白名单机制：谁的资源谁做主'
                },
            ],
        },
    }),

    bundler: viteBundler(),
})
