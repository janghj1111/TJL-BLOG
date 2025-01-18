import { defineClientConfig } from '@vuepress/client'
import NavigationButton from './components/NavigationButton.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('NavigationButton', NavigationButton)
  },
  setup() {},
  rootComponents: []
}) 