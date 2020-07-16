// 明白vuetify-loader 是指的框架按需加载 具体的实现
// 具体实现网址:https://vuetifyjs.com/zh-Hans/customization/a-la-carte/
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)