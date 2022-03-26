import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { FaAngleDown } from 'oh-vue-icons/icons'
import Vue from 'vue'

export default () => {
  if (process.client) {
    Vue.component('VIcon', OhVueIcon)
    addIcons(FaAngleDown)
  }
}
