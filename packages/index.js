import { DropDown, DropdownMenu, DropdownItem } from './components/dropdown'

const components = [DropdownMenu, DropdownItem, DropDown]

// vue插件安装
const install = function(Vue, options) {
  if (install.installed) {
    return
  }
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  DropdownMenu,
  DropdownItem,
  DropDown
}
