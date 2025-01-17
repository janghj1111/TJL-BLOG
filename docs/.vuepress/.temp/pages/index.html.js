import comp from "D:/TJL-BLOG/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"개발 블로그\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"블로그 주소\",\"slug\":\"블로그-주소\",\"link\":\"#블로그-주소\",\"children\":[]},{\"level\":2,\"title\":\"목적\",\"slug\":\"목적\",\"link\":\"#목적\",\"children\":[]},{\"level\":2,\"title\":\"install\",\"slug\":\"install\",\"link\":\"#install\",\"children\":[]},{\"level\":2,\"title\":\"run\",\"slug\":\"run\",\"link\":\"#run\",\"children\":[]}],\"git\":{\"updatedTime\":1737014033000,\"contributors\":[{\"name\":\"장호정\",\"username\":\"장호정\",\"email\":\"janghj1111@naver.com\",\"commits\":1,\"url\":\"https://github.com/장호정\"},{\"name\":\"janghj1111\",\"username\":\"janghj1111\",\"email\":\"janghj1111@naver.com\",\"commits\":1,\"url\":\"https://github.com/janghj1111\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
