<template>
  <transition name="visible">
    <ul class="max-dropdown-menu" v-show="visible">
      <slot></slot>
    </ul>
  </transition>
</template>

<script>
import event from '../../utils/eventBus'
export default {
  name: 'dropdownMenu',
  data() {
    return {
      visible: false
    }
  },
  prop: {},
  methods: {
    handlerVisibleChange(visible) {
      this.visible = visible
    }
  },
  created() {
    event.$on(`visibleChange-${this.$parent.uuid}`, this.handlerVisibleChange)
  }
}
</script>

<style lang="less" type="text/less">
.max-dropdown-menu {
  position: absolute;
  top: 15px;
  left: 0;
  min-width: 100px;
  z-index: 10;
  padding: 10px 0;
  margin: 5px 0;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.visible-enter-active,
.visible-leave-active {
  opacity: 1;
  transform-origin: 100% 100%;
  transform: scaleY(1);
  transition: transform 0.2s;
  transform-origin: center top 0px;
}
.visible-enter,
.visible-leave-to {
  opacity: 0;
  transform-origin: 100% 100%;
  transform: scaleY(0.8);
}
</style>
