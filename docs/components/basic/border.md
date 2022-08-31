# Border 边框
我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。

## 边框样式
我们提供了以下几种边框样式，以供选择。

:::demo
```vue
<template>
  <table class="demo-border">
    <tbody>
      <tr>
        <td class="text">Name</td>
        <td class="text">Thickness</td>
        <td class="line">Demo</td>
      </tr>
      <tr>
        <td class="text">Solid</td>
        <td class="text">1px</td>
        <td class="line">
          <div></div>
        </td>
      </tr>
      <tr>
        <td class="text">Dashed</td>
        <td class="text">2px</td>
        <td class="line">
          <div class="dashed"></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
.demo-border .text {
  width: 15%;
}
.demo-border .line {
  width: 70%;
}
.demo-border .line div {
  width: 100%;
  height: 0;
  border-top: 1px solid var(--el-border-color-base);
}
.demo-border .line .dashed {
  border-top: 2px dashed var(--el-border-color-base);
}
</style>
```
:::


## 圆角
我们提供了以下几种圆角样式，以供选择。

:::demo
```vue
<template>
  <el-row :gutter="12" class="demo-radius">
    <el-col
      v-for="(radius, i) in radiusGroup"
      :key="i"
      :span="6"
      :xs="{ span: 12 }"
    >
      <div class="title">{{ radius.name }}</div>
      <div class="value">
        <code>border-radius: {{ getValue(radius.type) || '0px' }}</code>
      </div>
      <div
        class="radius"
        :style="{
          borderRadius: radius.type
            ? `var(--el-border-radius-${radius.type})`
            : '',
        }"
      ></div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
export default {
  data() {
    return {
      radiusGroup: [
        {
          name: 'No Radius',
          type: '',
        },
        {
          name: 'Small Radius',
          type: 'small',
        },
        {
          name: 'Large Radius',
          type: 'base',
        },
        {
          name: 'Round Radius',
          type: 'round',
        },
      ],
    }
  },
  methods: {
    getValue(type) {
      const getCssVarValue = (prefix, type) =>
        getComputedStyle(document.documentElement).getPropertyValue(
          `--el-${prefix}-${type}`
        )
      return getCssVarValue('border-radius', type)
    },
  },
}
</script>
<style scoped>
.demo-radius .title {
  color: var(--el-text-color-regular);
  font-size: 18px;
  margin: 10px 0;
}
.demo-radius .value {
  color: var(--el-text-color-primary);
  font-size: 16px;
  margin: 10px 0;
}
.demo-radius .radius {
  height: 40px;
  width: 70%;
  border: 1px solid var(--el-border-color-base);
  border-radius: 0;
  margin-top: 20px;
}
</style>
```
:::


## 阴影
我们提供了以下几种投影样式，以供选择。

:::demo
```vue
<template>
  <div>
    <template v-for="(shadow, i) in shadowGroup" :key="i">
      <div
        class="demo-shadow"
        :style="{ boxShadow: `var(--el-box-shadow-${shadow.type})` }"
      ></div>
      <span class="demo-shadow-text"
        >{{ shadow.name }}
        <code>box-shadow: {{ getValue(shadow.type) }}</code></span
      >
    </template>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      shadowGroup: [
        {
          name: 'Basic Shadow',
          type: 'base',
        },
        {
          name: 'Light Shadow',
          type: 'light',
        },
      ],
    }
  },
  methods: {
    getValue(type) {
      const getCssVarValue = (prefix, type) =>
        getComputedStyle(document.documentElement).getPropertyValue(
          `--el-${prefix}-${type}`
        )
      return getCssVarValue('box-shadow', type)
    },
  },
}
</script>
<style scoped>
.demo-shadow {
  height: 100px;
  width: 50%;
}
.demo-shadow-text {
  line-height: 50px;
  color: var(--el-text-color-regular);
  font-size: 14px;
}
</style>
```
:::
