// enhanceApp.js
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import ElementUI from 'element-ui'
import vueClipboard from 'vue-clipboard2'
import * as filters from './public/utils/filters' // global filters
import 'element-ui/lib/theme-chalk/index.css'

import '../.vuepress/public/css/index.scss'

export default ({
  Vue,
}) => {
  Vue.use(VueHighlightJS),
    Vue.use(ElementUI),
    Vue.use(vueClipboard),
    // 过滤器
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
}
