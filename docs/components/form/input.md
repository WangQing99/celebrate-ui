# Input 输入框
通过鼠标或键盘输入字符
:::danger
Input 为受控组件，它 总会显示 Vue 绑定值。

在正常情况下，`input` 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 `v-model`)。 否则，输入框的值将不会改变。

不支持 `v-model` 修饰符。
:::

## 基础用法

:::demo
```vue
<template>
  <el-input v-model="input" placeholder="Please input" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
</script>
```
:::


## 禁用状态
通过 `disabled` 属性指定是否禁用 input 组件

:::demo
```vue
<template>
  <el-input v-model="input" disabled placeholder="Please input" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
</script>
```
:::

## 一键清空
使用`clearable`属性即可得到一个可一键清空的输入框

:::demo
```vue
<template>
  <el-input v-model="input" placeholder="Please input" clearable />
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
</script>
```
:::


## 密码类型的输入框
使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

:::demo
```vue
<template>
  <el-input v-model="input" placeholder="Please input password" show-password />
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
</script>
```
:::


## 带 icon 的输入框

添加图标以显示输入框类型。

要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 另外， `prefix` 和 `suffix` 命名的插槽也能正常工作。

:::demo
```vue
<template>
  <div class="demo-input-suffix">
    <span class="demo-input-label">Using attributes</span>
    <el-row :gutter="20">
      <el-input
        v-model="input1"
        placeholder="Pick a date"
        :suffix-icon="Calendar"
      />
    </el-row>
    <el-row :gutter="20">
      <el-input
        v-model="input2"
        placeholder="Type something"
        :prefix-icon="Search"
      />
    </el-row>
  </div>
  <div class="demo-input-suffix">
    <span class="demo-input-label">Using slots</span>
    <el-row :gutter="20">
      <el-input v-model="input3" placeholder="Pick a date">
        <template #suffix>
          <el-icon class="el-input__icon"><calendar /></el-icon>
        </template>
      </el-input>
    </el-row>

    <el-row :gutter="20">
      <el-input v-model="input4" placeholder="Type something">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref(''),
    }
  },
})
</script>

<style>
.demo-input-label {
  display: inline-block;
  width: 130px;
}

.demo-input-suffix {
  margin-bottom: 16px;
}
</style>
```
:::


## 多行文本
用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 更改 `input` 到原生 `textarea`。

文本域高度可通过 `rows` 属性控制

:::demo
```vue
<template>
  <el-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      textarea: ref(''),
    }
  },
})
</script>
```
:::


## 可自适应文本高度的文本域
设置文字输入类型的 `autosize` 属性使得根据内容自动调整的高度。 你可以给 `autosize` 提供一个包含有最大和最小高度的对象，让输入框自动调整。

:::demo
```vue
<template>
  <el-input
    v-model="textarea1"
    autosize
    type="textarea"
    placeholder="Please input"
  />
  <div style="margin: 20px 0"></div>
  <el-input
    v-model="textarea2"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="Please input"
  >
  </el-input>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      textarea1: ref(''),
      textarea2: ref(''),
    }
  },
})
</script>
```
:::


## 复合型输入框
添加前缀或后缀元素，通常是标签或按钮。

可通过 `slot` 来指定在 input 中前置或者后置内容。

:::demo
```vue
<template>
  <div>
    <el-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </el-input>
  </div>
  <div style="margin-top: 15px">
    <el-input v-model="input2" placeholder="Please input">
      <template #append>.com</template>
    </el-input>
  </div>
  <div style="margin-top: 15px">
    <el-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="select" placeholder="Select" style="width: 110px">
          <el-option label="Restaurant" value="1"></el-option>
          <el-option label="Order No." value="2"></el-option>
          <el-option label="Tel" value="3"></el-option>
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      select: ref(''),
    }
  },
})
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
```
:::


## 不同尺寸的输入框

设置`size` 属性可以控制输入框的大小， 除了默认大小外，还有另外三个选项：`medium`, `small` 和 `mini`。

:::demo
```vue
<template>
  <div class="demo-input-size">
    <el-input v-model="input1" placeholder="Please Input" />
    <el-input v-model="input2" size="medium" placeholder="Please Input" />
    <el-input v-model="input3" size="small" placeholder="Please Input" />
    <el-input v-model="input4" size="mini" placeholder="Please Input" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref(''),
    }
  },
})
</script>

<style scoped>
.el-input {
  margin-bottom: 16px;
}
</style>
```
:::


## 自动补全输入框
根据输入内容提供对应的输入建议

Autodcomplete 组件提供输入建议。 `fetch-suggestions` 属性是返回建议输入的方法。 在此示例中， `querySearch(queryString, cb)` 返回建议通过 `cb(data)` 自动完成建议。

:::demo
```vue
<template>
  <el-row class="demo-autocomplete">
    <el-col :span="12">
      <div class="sub-title">list suggestions when activated</div>
      <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        class="inline-input"
        placeholder="Please Input"
        @select="handleSelect"
      />
    </el-col>
    <el-col :span="12">
      <div class="sub-title">list suggestions on input</div>
      <el-autocomplete
        v-model="state2"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        class="inline-input"
        placeholder="Please Input"
        @select="handleSelect"
      />
    </el-col>
  </el-row>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const restaurants = ref([])
    const querySearch = (queryString: string, cb) => {
      const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
      // call callback function to return suggestions
      cb(results)
    }
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    }
    const loadAll = () => {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ]
    }
    const handleSelect = (item) => {
      console.log(item)
    }
    onMounted(() => {
      restaurants.value = loadAll()
    })
    return {
      restaurants,
      state1: ref(''),
      state2: ref(''),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
    }
  },
})
</script>
```
:::


## 自定义建议模板
可自定义输入建议的显示

使用 `scoped` 插槽 自定义建议项。 你可以通过插槽参数 `item` 访问建议对象。

:::demo
```vue
<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearch"
    popper-class="my-autocomplete"
    placeholder="Please input"
    @select="handleSelect"
  >
    <template #suffix>
      <el-icon class="el-input__icon" @click="handleIconClick">
        <edit />
      </el-icon>
    </template>
    <template #default="{ item }">
      <div class="value">{{ item.value }}</div>
      <span class="link">{{ item.link }}</span>
    </template>
  </el-autocomplete>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const links = ref([])

    const querySearch = (queryString: string, cb) => {
      const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value
      // call callback function to return suggestion objects
      cb(results)
    }
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    }
    const loadAll = () => {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ]
    }
    const handleSelect = (item) => {
      console.log(item)
    }

    const handleIconClick = (ev) => {
      console.log(ev)
    }

    onMounted(() => {
      links.value = loadAll()
    })

    return {
      links,
      state: ref(''),
      querySearch,
      createFilter,
      loadAll,
      handleSelect,
      handleIconClick,
    }
  },
})
</script>

<style>
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
</style>
```
:::


## 远程搜索
从服务端搜索数据

:::demo
```vue
<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="Please input"
    @select="handleSelect"
  />
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const links = ref([])
    const loadAll = () => {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
      ]
    }
    let timeout
    const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
      const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value

      clearTimeout(timeout)
      timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    }
    const createFilter = (queryString: string) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        )
      }
    }
    const handleSelect = (item) => {
      console.log(item)
    }
    onMounted(() => {
      links.value = loadAll()
    })
    return {
      links,
      state: ref(''),
      querySearchAsync,
      createFilter,
      loadAll,
      handleSelect,
    }
  },
})
</script>
```
:::


## 输入长度限制
使用 `maxlength` 和 `minlength` 属性, 来控制输入内容的最大字数和最小字数。 "字符数"使用JavaScript字符串长度来衡量。 为文本或文本输入类型设置 `maxlength` prop可以限制输入值的长度。 允许你通过设置 `show-word-limit` 到 `true` 来显示剩余字数。


:::demo
```vue
<template>
  <el-input
    v-model="text"
    maxlength="10"
    placeholder="Please input"
    show-word-limit
    type="text"
  >
  </el-input>
  <div style="margin: 20px 0"></div>
  <el-input
    v-model="textarea"
    maxlength="30"
    placeholder="Please input"
    show-word-limit
    type="textarea"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      text: ref(''),
      textarea: ref(''),
    }
  },
})
</script>
```
:::