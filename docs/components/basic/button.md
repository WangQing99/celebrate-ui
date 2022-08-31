# Button 按钮

常用的操作按钮。

## 基础用法

使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

:::demo

```vue
<template>
  <el-row>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row>
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row>
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>
  </el-row>
</template>

<style>
.el-row {
  margin-bottom: 20px;
  align-items: baseline;
}
</style>
```

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

:::demo

```vue
<template>
  <el-row>
    <el-button disabled>Default</el-button>
    <el-button type="primary" disabled>Primary</el-button>
    <el-button type="success" disabled>Success</el-button>
    <el-button type="info" disabled>Info</el-button>
    <el-button type="warning" disabled>Warning</el-button>
    <el-button type="danger" disabled>Danger</el-button>
  </el-row>

  <el-row>
    <el-button plain disabled>Plain</el-button>
    <el-button type="primary" plain disabled>Primary</el-button>
    <el-button type="success" plain disabled>Success</el-button>
    <el-button type="info" plain disabled>Info</el-button>
    <el-button type="warning" plain disabled>Warning</el-button>
    <el-button type="danger" plain disabled>Danger</el-button>
  </el-row>
</template>
```

:::

## 文字按钮

没有边框和背景色的按钮。

:::demo

```vue
<template>
  <el-button type="text">Text Button</el-button>
  <el-button type="text" disabled>Text Button</el-button>
</template>
```

:::

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 `icon` 属性来为按钮添加图标。 你可以在 Element Plus icon 组件里找到 Element Plus 提供的内置图标。 通过向右方添加`<i>`标签来添加图标， 你也可以使用自定义图标。

:::demo

```vue
<template>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
  <el-button type="primary" icon="el-icon-search">Search</el-button>
  <el-button type="primary">
    Upload<i class="el-icon-upload el-icon-right"></i>
  </el-button>
</template>
```

:::

## 按钮组

通过按钮组来组合一系列相似的操作。

使用标签 `<el-button-group>` 来给按钮分组。

:::demo

```vue
<template>
  <el-button-group>
    <el-button type="primary" icon="el-icon-arrow-left"
      >Previous Page</el-button
    >
    <el-button type="primary"
      >Next Page<i class="el-icon-arrow-right el-icon-right"></i
    ></el-button>
  </el-button-group>
  <el-button-group>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
  </el-button-group>
</template>
```

:::

## 加载中

点击按钮来加载数据，并向用户反馈加载状态。

设置 `loading` 属性，当设置为 `true` 时即为加载中。
:::demo

```vue
<template>
  <el-button type="primary" :loading="true">Loading</el-button>
</template>
```

:::

## 各种尺寸的尺寸按钮

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

通过设置 `size`，属性来设置不同的按钮尺寸，可供选择的尺寸有：`medium`、`small`、`mini`。

:::demo

```vue
<template>
  <el-row>
    <el-button>Default</el-button>
    <el-button size="medium">Medium</el-button>
    <el-button size="small">Small</el-button>
    <el-button size="mini">Mini</el-button>
  </el-row>
  <el-row>
    <el-button round>Default</el-button>
    <el-button size="medium" round>Medium</el-button>
    <el-button size="small" round>Small</el-button>
    <el-button size="mini" round>Mini</el-button>
  </el-row>
  <el-row>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button icon="el-icon-search" size="medium" circle></el-button>
    <el-button icon="el-icon-search" size="small" circle></el-button>
    <el-button icon="el-icon-search" size="mini" circle></el-button>
  </el-row>
</template>
```

:::


## Button 属性

| 参数        | 说明             | 类型    | 可选值                                             | 默认值 |
| ----------- | ---------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸             | string  | medium / small / mini                              | —      |
| type        | 类型             | string  | primary / success / warning / info / danger / text | —      |
| plain       | 是否为朴素按钮   | boolean | —                                                  | false  |
| round       | 是否为圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否为圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否为加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否为禁用状态   | boolean | —                                                  | false  |
| icon        | 图标组件         | boolean | —                                                  | —      |
| autofocus   | 是否默认聚焦     | boolean | —                                                  | false  |
| native-type | 原生 type 属性   | string  | button / submit / reset                            | button |

## Button 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| —      | 自定义默认内容 |

## Button Group 属性

| 属性 | 说明                         | 类型   | 可选值                | 默认值 |
| ---- | ---------------------------- | ------ | --------------------- | ------ |
| size | 用于控制该按钮组内按钮的大小 | string | medium / small / mini | —      |

## Button Group 插槽

| 插槽名 | 说明             | 子标签 |
| ------ | ---------------- | ------ |
| —      | 自定义按钮组内容 | Button |
