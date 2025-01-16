import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default {
    bundler: viteBundler(),
    theme: defaultTheme({
    nav: [
        {
          text: 'About',
          items: [
             { text: 'About Me', link: '/about/me' },
             { text: 'About Blog', link: '/about/blog' } // '/about'으로 설정할경우에 '/about.md'를 렌더링
          ]
        }
      ],
    sidebar: [
      {
        title: 'Introduction',
        path: '/guide/',
        collapsable: false,
        children: [
          '/guide/getting-started',
          '/guide/customization'
        ]
      }
    ]
  }),
  title: 'Today Jang Learned', // 사이트 제목
  description: '배웠던 것들을 기록하는 개인 블로그입니다.', // 사이트 설명
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // 아이콘 설정
  ],
  plugins: [
    '@vuepress/last-updated', // 마지막 업데이트 시간 표시
  ],
  port : 3001,
}