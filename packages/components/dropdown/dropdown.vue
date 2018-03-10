<template>
  <div class="max-dropdown"
    ref="dropDownContainer"
    @click="isVisible = true"
    v-clickoutside="handlerClickOutside">
    <slot></slot>
  </div>
</template>

<script>
import clickoutside from '../../directives/clickoutside'
import { setTimeout } from 'timers'
import event from '../../utils/eventBus'
import uuid from '../../utils/uuid'
export default {
  name: 'dropdown',
  data() {
    return {
      isVisible: false,
      uuid: uuid()
    }
  },
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    hideOnClick: {
      type: Boolean,
      default: true
    },
    showTimeout: {
      type: Number,
      default: 200
    },
    hideTimeout: {
      type: Number,
      default: 200
    }
  },
  methods: {
    show() {
      let { trigger, timeout, showTimeout } = this
      if (trigger !== 'hover') return
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        this.isVisible = true
      }, showTimeout)
    },
    hide() {
      let { trigger, timeout, hideTimeout } = this

      if (trigger !== 'hover') return
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        this.isVisible = false
      }, hideTimeout)
    },
    handleMenuClick(command) {
      if (this.hideOnClick) {
        this.$nextTick(() => {
          this.isVisible = false
        })
      }
      this.$emit('command', command)
    },
    handlerClickOutside() {
      this.isVisible = false
    },
    _bindEvent() {
      this.$refs.dropDownContainer.addEventListener('mouseenter', () => {
        this.show()
      })
      this.$refs.dropDownContainer.addEventListener('mouseleave', () => {
        this.hide()
      })
    }
  },
  directives: { clickoutside },
  watch: {
    isVisible(val) {
      this.$emit('visible-change', val)
      event.$emit(`visibleChange-${this.uuid}`, val)
    }
  },
  mounted() {
    event.$on(`menuListClick-${this.uuid}`, this.handleMenuClick)
    this._bindEvent()
  }
}
</script>

<style lang="less" type="text/less">
.max-dropdown {
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;
  cursor: pointer;
}
</style>
