// enhanceApp.js
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/dark.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({
  Vue,
}) => {
  Vue.use(VueHighlightJS),
  Vue.use(ElementUI)
}
