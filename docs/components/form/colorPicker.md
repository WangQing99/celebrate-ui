# ColorPicker 颜色选择器

用于颜色选择，支持多种格式。

## 基础用法

使用 `v-model` 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。

:::demo

```vue
<template>
  <div class="demo-color-block">
    <span class="demonstration">有默认值</span>
    <el-color-picker v-model="color1" />
  </div>
  <div class="demo-color-block">
    <span class="demonstration">无默认值</span>
    <el-color-picker v-model="color2" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const color1 = ref('#409EFF')
    const color2 = ref(null)
    return {
      color1,
      color2,
    }
  },
})
</script>

<style>
.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.demonstration {
  margin-right: 16px;
  color: #909399;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
```

:::

## 选择透明度

ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色， 要启用 Alpha 选择，只需添加 `show-alpha `属性。

:::demo

```vue
<template>
  <el-color-picker v-model="color" show-alpha />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const color = ref('rgba(19, 206, 102, 0.8)')
    return {
      color,
    }
  },
})
</script>
```

:::

## 预定义颜色

ColorPicker 支持预定义颜色

:::demo

```vue
<template>
  <el-color-picker v-model="color" show-alpha :predefine="predefineColors" />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const color = ref('rgba(255, 69, 0, 0.68)')
    const predefineColors = ref([
      '#ff4500',
      '#ff8c00',
      '#ffd700',
      '#90ee90',
      '#00ced1',
      '#1e90ff',
      '#c71585',
      'rgba(255, 69, 0, 0.68)',
      'rgb(255, 120, 0)',
      'hsv(51, 100, 98)',
      'hsva(120, 40, 94, 0.5)',
      'hsl(181, 100%, 37%)',
      'hsla(209, 100%, 56%, 0.73)',
      '#c7158577',
    ])
    return {
      color,
      predefineColors,
    }
  },
})
</script>
```

:::

## 不同尺寸

:::demo

```vue
<template>
  <div class="demo-color-sizes">
    <el-color-picker v-model="color" />
    <el-color-picker v-model="color" size="medium" />
    <el-color-picker v-model="color" size="small" />
    <el-color-picker v-model="color" size="mini" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const color = ref('409EFF')

    return {
      color,
    }
  },
})
</script>

<style lang="scss">
.el-color-picker:not(:last-child) {
  margin-right: 16px;
}
</style>
```

:::

## 属性

| 属性                  | 说明                               | 类型               | 可选值                | 默认值                                                     |
| --------------------- | ---------------------------------- | ------------------ | --------------------- | ---------------------------------------------------------- |
| model-value / v-model | 选中项绑定值                       | string             | —                     | —                                                          |
| disabled              | 是否禁用                           | boolean            | —                     | false                                                      |
| size                  | 尺寸                               | string             | medium / small / mini | —                                                          |
| show-alpha            | 是否支持透明度选择                 | boolean            | —                     | false                                                      |
| color-format          | 写入 v-model 的颜色的格式          | string             | hsl / hsv / hex / rgb | hex (当 show-alpha 为 false) / rgb (当 show-alpha 为 true) |
| popper-class          | ColorPicker 下拉菜单自定义图标组件 | string / Component | —                     | —                                                          |
| predefine             | 预定义颜色                         | array              | —                     | —                                                          |


## 事件

| 事件名     | 说明                             | 回调参数     |
| ------------- | ---------------------------------- | ---------------- |
| change        | 当绑定值变化时触发        | 当前值        |
| active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |