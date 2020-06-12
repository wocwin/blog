// enhanceApp.js
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import ElementUI from 'element-ui'
import vueClipboard from 'vue-clipboard2'
import 'element-ui/lib/theme-chalk/index.css'

import '../.vuepress/public/css/index.scss'

export default ({
  Vue,
}) => {
  Vue.use(VueHighlightJS),
    Vue.use(ElementUI),
    Vue.use(vueClipboard)
}
