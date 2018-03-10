# dropDown 下拉菜单

---

### 基础用法

展示一组折叠的下拉菜单。需要配合 DropdownMenu 和 DropdownItem

<dropdown>
  <span class="text">下拉菜单</span>
  <dropdown-menu>
    <dropdown-item>狮子</dropdown-item>
    <dropdown-item>老虎</dropdown-item>
    <dropdown-item disabled>大象</dropdown-item>
    <dropdown-item>猴子</dropdown-item>
  </dropdown-menu>
</dropdown>

::: demo
```html
<dropdown>
  <span class="text">下拉菜单</span>
  <dropdown-menu>
    <dropdown-item>狮子</dropdown-item>
    <dropdown-item>老虎</dropdown-item>
    <dropdown-item disabled>大象</dropdown-item>
    <dropdown-item>猴子</dropdown-item>
  </dropdown-menu>
</dropdown>
```
:::
----

### 触发方式

通过设置属性 `trigger` 可以更改触发方式，可选项为 click 、 hover(默认)

<dropdown trigger="click">
  <span class="text">点击下拉菜单</span>
  <dropdown-menu>
    <dropdown-item>狮子</dropdown-item>
    <dropdown-item>老虎</dropdown-item>
    <dropdown-item disabled>大象</dropdown-item>
    <dropdown-item>猴子</dropdown-item>
    <dropdown-item>熊</dropdown-item>
  </dropdown-menu>
</dropdown>

::: demo
```html
<dropdown trigger="click">
  <span class="text">点击下拉菜单</span>
  <dropdown-menu>
    <dropdown-item>狮子</dropdown-item>
    <dropdown-item>老虎</dropdown-item>
    <dropdown-item disabled>大象</dropdown-item>
    <dropdown-item>猴子</dropdown-item>
    <dropdown-item>熊</dropdown-item>
  </dropdown-menu>
```
:::

----

### 指令事件
点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作

<dropdown trigger="click" @command="handlerCommand">
  <span class="text">点击下拉菜单</span>
  <dropdown-menu>
    <dropdown-item command="lion">狮子</dropdown-item>
    <dropdown-item command="elephant" disabled>大象</dropdown-item>
    <dropdown-item command="monky">猴子</dropdown-item>
    <dropdown-item command="bear">熊</dropdown-item>
  </dropdown-menu>
</dropdown>

::: demo
```html
<dropdown trigger="click" @command="handlerCommand">
  <span class="text">点击下拉菜单</span>
  <dropdown-menu>
    <dropdown-item command="lion">狮子</dropdown-item>
    <dropdown-item command="elephant" disabled>大象</dropdown-item>
    <dropdown-item command="monky">猴子</dropdown-item>
    <dropdown-item command="bear">熊</dropdown-item>
  </dropdown-menu>
</dropdown>
```
:::


## API

#### Dropdown props

| 属性          | 说明                                               | 类型    | 可选值      | 默认值   |
| ------------- | -------------------------------------------------- | ------- | ----------- | -------- |
| trigger       | 触发方式                                           | string  | hover,click | hover    |
| hide-on-click | 是否在点击菜单项后隐藏菜单                         | boolean | —          | true       |
| show-timeout  | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效） | number  | —           | 200        |
| hide-timeout  | 收起下拉菜单的延时（仅在 trigger 为 hover 时有效） | number  | —           | 200        |


#### Dropdown event

| 属性          | 说明                                               | 回调参数    |
| ------------- | -------------------------------------------------- | ------- |
| command        | 点击菜单项触发的事件回调 | dropdown-item 的指令          |
| visible-change | 下拉框出现/隐藏时触发    | 出现则为 true，隐藏则为 false |  


#### Dropdown Menu Item Attributes

| 属性          | 说明                                               | 类型    | 可选值      | 默认值   |
| ------------- | ------------------------------------------------- | ------- | ----------- | -------- |
| command       | 指令                                              | string/number/object  |  —       |
| disabled      | 禁用                         | boolean	          |           —           | false    |


<style>
  .max-dropdown {
    margin: 20px 0;
  }
  .text {
    font-weight: 600;
    color: #2d8cf0;
  }
</style>

<script>
export default {
    methods: {
      handlerCommand(e) {
        alert(e)
      }
    }
}
</script>
