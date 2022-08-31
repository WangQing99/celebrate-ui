# Checkbox 多选框
组备选项中进行多选


## 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

`checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用 `v-model` 绑定 `Array` 类型的变量即可。 只有一个选项时的默认值类型为 `Boolean`，当选中时值为`true`。 `el-checkbox` 标签中的内容将成为复选框按钮之后的描述。

:::demo
```vue
<template>
  <div>
    <el-checkbox v-model="checked1" label="Option 1"></el-checkbox>
    <el-checkbox v-model="checked2" label="Option 2"></el-checkbox>
  </div>
  <div>
    <el-checkbox
      v-model="checked3"
      label="Option 1"
      size="medium"
    ></el-checkbox>
    <el-checkbox
      v-model="checked4"
      label="Option 2"
      size="medium"
    ></el-checkbox>
  </div>
  <div>
    <el-checkbox v-model="checked5" label="Option 1" size="small"></el-checkbox>
    <el-checkbox v-model="checked6" label="Option 2" size="small"></el-checkbox>
  </div>
  <div>
    <el-checkbox v-model="checked7" label="Option 1" size="mini"></el-checkbox>
    <el-checkbox v-model="checked8" label="Option 2" size="mini"></el-checkbox>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checked1 = ref(true)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(false)
    const checked5 = ref(false)
    const checked6 = ref(false)
    const checked7 = ref(false)
    const checked8 = ref(false)
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
      checked7,
      checked8,
    }
  },
})
</script>
```
:::


## 禁用状态
多选框不可用状态。

设置 `disabled` 属性即可。

:::demo
```vue
<template>
  <el-checkbox v-model="checked1" disabled>Disabled</el-checkbox>
  <el-checkbox v-model="checked2">Not disabled</el-checkbox>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(true)
    return {
      checked1,
      checked2,
    }
  },
})
</script>
```
:::


## 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

在 `el-checkbox` 元素中定义 `v-model` 绑定变量，单一的 `checkbox` 中，默认绑定变量的值会是 `Boolean`，选中为 `true`。 在 `el-checkbox` 组件中，`label` 是选择框的值。 如果该组件下没有被传入内容，那么 `label` 将会作为 checkbox 按钮后的介绍。 `label` 也与数组中的元素值相对应。 如果指定的值存在于数组中，就处于选择状态，反之亦然。


:::demo
```vue
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="Option A" />
    <el-checkbox label="Option B" />
    <el-checkbox label="Option C" />
    <el-checkbox label="disabled" disabled />
    <el-checkbox label="selected and disabled" disabled />
  </el-checkbox-group>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkList = ref(['selected and disabled', 'Option A'])
    return {
      checkList,
    }
  },
})
</script>
```
:::


## 中间状态
`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果


:::demo
```vue
<template>
  <el-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    >Check all</el-checkbox
  >
  <el-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <el-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

export default defineComponent({
  setup() {
    const state = reactive({
      checkAll: false,
      checkedCities: ['Shanghai', 'Beijing'],
      cities: cityOptions,
      isIndeterminate: true,
    })
    const handleCheckAllChange = (val) => {
      state.checkedCities = val ? cityOptions : []
      state.isIndeterminate = false
    }
    const handleCheckedCitiesChange = (value) => {
      const checkedCount = value.length
      state.checkAll = checkedCount === state.cities.length
      state.isIndeterminate =
        checkedCount > 0 && checkedCount < state.cities.length
    }
    return {
      ...toRefs(state),
      handleCheckAllChange,
      handleCheckedCitiesChange,
    }
  },
})
</script>
```
:::


## 可选项目数量的限制
使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

:::demo
```vue
<template>
  <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
    <el-checkbox v-for="city in cities" :key="city" :label="city">{{
      city
    }}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

export default defineComponent({
  setup() {
    const state = reactive({
      checkedCities: ['Shanghai', 'Beijing'],
      cities: cityOptions,
    })

    return toRefs(state)
  },
})
</script>
```
:::

## 按钮样式
按钮样式的多选组合。

只需要把 `el-checkbox` 元素替换为 `el-checkbox-button` 元素即可。 此外，Element Plus 还提供了`size`属性。

:::demo
```vue
<template>
  <div>
    <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="city in cities" :key="city" :label="city">{{
        city
      }}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div class="demo-button-style">
    <el-checkbox-group v-model="checkboxGroup2" size="medium">
      <el-checkbox-button v-for="city in cities" :key="city" :label="city">{{
        city
      }}</el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div class="demo-button-style">
    <el-checkbox-group v-model="checkboxGroup3" size="small">
      <el-checkbox-button
        v-for="city in cities"
        :key="city"
        :label="city"
        :disabled="city === 'Beijing'"
        >{{ city }}</el-checkbox-button
      >
    </el-checkbox-group>
  </div>
  <div class="demo-button-style">
    <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <el-checkbox-button v-for="city in cities" :key="city" :label="city">{{
        city
      }}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

export default defineComponent({
  setup() {
    const state = reactive({
      checkboxGroup1: ['Shanghai'],
      checkboxGroup2: ['Shanghai'],
      checkboxGroup3: ['Shanghai'],
      checkboxGroup4: ['Shanghai'],
      cities: cityOptions,
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped>
.demo-button-style {
  margin-top: 24px;
}
</style>
```
:::


## 带有边框
设置`border`属性可以渲染为带有边框的多选框。

:::demo
```vue
<template>
  <div>
    <el-checkbox v-model="checked1" label="Option1" border></el-checkbox>
    <el-checkbox v-model="checked2" label="Option2" border></el-checkbox>
  </div>
  <div class="demo-with-border">
    <el-checkbox
      v-model="checked3"
      label="Option1"
      border
      size="medium"
    ></el-checkbox>
    <el-checkbox
      v-model="checked4"
      label="Option2"
      border
      size="medium"
    ></el-checkbox>
  </div>
  <div class="demo-with-border">
    <el-checkbox-group v-model="checkboxGroup1" size="small">
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border disabled></el-checkbox>
    </el-checkbox-group>
  </div>
  <div class="demo-with-border">
    <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <el-checkbox label="Option1" border></el-checkbox>
      <el-checkbox label="Option2" border></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: [],
    })

    return toRefs(state)
  },
})
</script>

<style scoped>
.demo-with-border {
  margin-top: 24px;
}
</style>
```
:::


## Checkbox 属性

| 属性                | 说明                                                            | 类型                             | 可选值             | 默认值 |
| --------------------- | ----------------------------------------------------------------- | ---------------------------------- | --------------------- | ------ |
| model-value / v-model | 选中项绑定值                                                | string / number / boolean          | —                   | —    |
| label                 | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean / object | —                   | —    |
| true-label            | 选中时的值                                                   | string / number                    | —                   | —    |
| false-label           | 没有选中时的值                                             | string / number                    | —                   | —    |
| disabled              | 是否禁用                                                      | boolean                            | —                   | false  |
| border                | 是否显示边框                                                | boolean                            | —                   | false  |
| size                  | Checkbox 的尺寸                                                | string                             | medium / small / mini | —    |
| name                  | 原生 name 属性                                                | string                             | —                   | —    |
| checked               | 当前是否勾选                                                | boolean                            | —                   | false  |
| indeterminate         | 设置 indeterminate 状态，只负责样式控制               | boolean                            | —                   | false  |


## Checkbox 事件

| 事件名 | 说明                   | 回调参数 |
| ------ | ------------------------ | -------- |
| change | 当绑定值变化时触发的事件 | value    |


## Checkbox 插槽

| 插槽名 | 说明         |
| ------ | -------------- |
| —    | 自定义默认内容 |


## Checkbox-Group 属性

| 属性                | 说明                                     | 类型  | 可选值             | 默认值 |
| --------------------- | ------------------------------------------ | ------- | --------------------- | ------- |
| model-value / v-model | 绑定值                                  | array   | —                   | —     |
| size                  | 多选框组尺寸                         | string  | medium / small / mini | —     |
| disabled              | 是否禁用                               | boolean | —                   | false   |
| min                   | 可被勾选的 checkbox 的最小数量   | number  | —                   | —     |
| max                   | 可被勾选的 checkbox 的最大数量   | number  | —                   | —     |
| text-color            | 按钮形式的 Checkbox 激活时的文本颜色 | string  | —                   | #ffffff |
| fill                  | 按钮形式的 Checkbox 激活时的填充色和边框色 | string  | —                   | #409EFF |


## Checkbox-Group 事件

| 事件名 | 说明                   | 回调参数 |
| ------ | ------------------------ | -------- |
| change | 当绑定值变化时触发的事件 | value    |


## Checkbox-Group 插槽

| 插槽名 | 说明         | 子标签                  |
| ------ | -------------- | -------------------------- |
| -      | 自定义默认内容 | Checkbox / Checkbox-button |


## Checkbox-Button 属性

| 属性      | 说明                                            | 类型                             | 可选值 | 默认值 |
| ----------- | ------------------------------------------------- | ---------------------------------- | ------ | ------ |
| label       | 选中状态的值，只有在绑定对象类型为 array 时有效。 | string / number / boolean / object | —    | —    |
| true-label  | 选中时的值                                   | string / number                    | —    | —    |
| false-label | 没有选中时的值                             | string / number                    | —    | —    |
| disabled    | 是否禁用                                      | boolean                            | —    | false  |
| name        | 原生 name 属性                                | string                             | —    | —    |
| checked     | 当前是否勾选                                | boolean                            | —    | false  |


## Checkbox-Button 插槽

| 插槽名 | 描述         |
| ------ | -------------- |
| -      | 自定义默认内容 |