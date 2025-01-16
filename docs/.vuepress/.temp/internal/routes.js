export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/TJL-BLOG/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"개발 블로그"} }],
  ["/about/blog.html", { loader: () => import(/* webpackChunkName: "about_blog.html" */"D:/TJL-BLOG/docs/.vuepress/.temp/pages/about/blog.html.js"), meta: {"title":"About Blog"} }],
  ["/about/me.html", { loader: () => import(/* webpackChunkName: "about_me.html" */"D:/TJL-BLOG/docs/.vuepress/.temp/pages/about/me.html.js"), meta: {"title":"About Me"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/TJL-BLOG/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
