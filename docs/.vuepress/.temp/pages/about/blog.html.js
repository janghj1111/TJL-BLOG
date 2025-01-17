import comp from "D:/TJL-BLOG/docs/.vuepress/.temp/pages/about/blog.html.vue"
const data = JSON.parse("{\"path\":\"/about/blog.html\",\"title\":\"About Blog\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1737014033000,\"contributors\":[{\"name\":\"janghj1111\",\"username\":\"janghj1111\",\"email\":\"janghj1111@naver.com\",\"commits\":1,\"url\":\"https://github.com/janghj1111\"}]},\"filePathRelative\":\"about/blog.md\"}")
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
