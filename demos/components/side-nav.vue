<template>
  <div class="side-nav">
    <div v-for="(title, index) in (Object.keys(data))" :key="index" class="group-container">
      <p class="side-nav-title">{{title}}</p>
      <div class="side-nav-items" v-for="(nav, index) in data[title]" :key="index" v-if="nav.desc">
        <router-link :class="$route.name===nav.name ? 'active' : ''" v-if="nav.name" :to="{name: nav.name}">{{nav.desc}}</router-link>
        <p v-else class="side-nav-group">{{nav.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import navConf from '../nav.config.json'
export default {
  data() {
    return {
      data: navConf
    }
  }
}
</script>

<style lang="less" type="text/less">
.side-nav {
  display: inline-block;
  margin: 32px 0;
  padding: 0;
  color: #3f536e;
  background-color: #fff;
  z-index: 99;
  .group-container {
    margin-bottom: 32px;
  }
  .side-nav-title {
    padding: 0 24px 8px;
    color: #8dabc4;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .side-nav-items {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
    a {
      display: block;
      position: relative;
      padding: 8px 24px;
      color: #3f536e;
      font-weight: normal;
      line-height: 1.5;
      cursor: pointer;
    }
    .side-nav-group {
      display: block;
      position: relative;
      padding: 6px 0 6px 24px;
      color: #2c405a;
      font-weight: bold;
    }
    .active {
      color: #3faaf5;
    }
  }
}
</style>