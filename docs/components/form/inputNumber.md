# Input Number 数字输入框
仅允许输入标准的数字值，可定义范围

## 基础用法
要使用它，只需要在 `<el-input-number>` 元素中使用 v-model 绑定变量即可，变量的初始值即为默认值。

:::demo
```vue
<template>
  <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const num = ref(1)
    const handleChange = (value: string) => {
      console.log(value)
    }
    return {
      num,
      handleChange,
    }
  },
})
</script>
```
:::


## 