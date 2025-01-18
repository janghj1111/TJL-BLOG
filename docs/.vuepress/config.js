import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

export default {
    bundler: viteBundler(),
    theme: defaultTheme({
    sidebar: [
    {
        text: 'About1',
        children: [
            {
                text: 'About2',
                children: [
                    '/about/blog',
                    '/about/me'
                ]
            }
        ]
      }
    ],
    navbar: [
        // nested group - max depth is 2
        {
          text: 'Group',
          children: [
            {
              // text: 'SubGroup',
              children: ['/group/foo.md', '/group/bar.md'],
            },
          ],
        },
        // control when should the item be active
        {
          text: 'Group 2',
          children: [
            {
              text: 'Always active',
              link: '/',
              // this item will always be active
              activeMatch: '/',
            },
            {
              text: 'Active on /foo/',
              link: '/not-foo/',
              // this item will be active when current route path starts with /foo/
              // regular expression is supported
              activeMatch: '^/foo/',
            },
          ],
        },
      ],
  }),
  title: 'Today Jang Learned', // 사이트 제목
  description: '배웠던 것들을 기록하는 개인 블로그입니다.', // 사이트 설명
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // 아이콘 설정
  ],
  plugins: [
    '@vuepress/last-updated', // 마지막 업데이트 시간 표시
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),   // 컴포넌트 폴더를 등록하는 방법
      // components:{
      //   TagList: path.resolve(__dirname, './components/TagList.vue'),   // 개별 컴포넌트를 등록하는 방법
      //   MyComponent: path.resolve(__dirname, './components/MyComponent.vue'),   // 개별 컴포넌트를 등록하는 방법
      // } 
    })
  ],
  port : 3001,
}