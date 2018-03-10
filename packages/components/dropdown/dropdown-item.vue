<template>
  <li :class="['max-dropdown-item', {disabled}]" @click="handlerMenuItemClick" >
    <slot></slot>
  </li>
</template>

<script>
import event from '../../utils/eventBus'

export default {
  name: 'dropdownItem',
  props: {
    command: [Number, String, Object],
    disabled: Boolean
  },
  methods: {
    handlerMenuItemClick() {
      if (this.disabled) return
      let data = this.command || this.$slots.default[0].elm.data
      event.$emit(`menuListClick-${this.$parent.$parent.uuid}`, data)
    }
  }
}
</script>

<style lang="less" type="text/less">
.max-dropdown-item {
  transition: background-color 0.5s;
  list-style: none;
  line-height: 36px;
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
  color: #606266;
  outline: none;
  &.disabled {
    cursor: default;
    color: #bbb;
    pointer-events: none;
  }
  &:hover {
    background-color: #c5d9e8;
  }
}
</style>
