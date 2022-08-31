# DatePicker 日期选择器

用于选择或输入日期

## 选择某一天

以”日“为基本单位，基础的日期选择控件

基本单位由 `type` 属性指定。 通过 `shortcuts` 配置快捷选项， 禁用日期通过` disabledDate` 设置，传入函数

:::demo

```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">Picker with quick options</span>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      disabledDate(time) {
        return time.getTime() > Date.now()
      },
      shortcuts: [
        {
          text: 'Today',
          value: new Date(),
        },
        {
          text: 'Yesterday',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          },
        },
        {
          text: 'A week ago',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          },
        },
      ],
      value1: '',
      value2: '',
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style>
.demo-date-picker {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px #dcdfe6;
  flex: 1;
}

.demo-date-picker .block:last-child{
    border-right: none;
}

.demonstration{
    display: block;
    color: #909399;
    font-size: 14px;
    margin-bottom: 20px;
}

.demo-date-picker .container{
    flex: 1;
    border-right: solid 1px #dcdfe6;
}
</style>
```

:::


## 其他日期单位
通过扩展基础的日期选择，可以选择周、月、年或多个日期

:::demo
```vue
<template>
  <div class="demo-date-picker">
    <div class="container">
      <div class="block">
        <span class="demonstration">Week</span>
        <el-date-picker
          v-model="value1"
          type="week"
          format="[Week] ww"
          placeholder="Pick a week"
        >
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">Month</span>
        <el-date-picker
          v-model="value2"
          type="month"
          placeholder="Pick a month"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">Year</span>
        <el-date-picker v-model="value3" type="year" placeholder="Pick a year">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">Dates</span>
        <el-date-picker
          v-model="value4"
          type="dates"
          placeholder="Pick one or more dates"
        >
        </el-date-picker>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      value1: '',
      value2: '',
      value3: '',
      value4: '',
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped>
.demo-date-picker .container .block{
    border-right: none;
}
.demo-date-picker .container .block:last-child{
    border-top: solid 1px #dcdfe6;
}
</style>
```
:::


## 选择一段时间
可在一个选择器中便捷地选择一个时间范围

在选择日期范围时，默认情况下左右面板会联动。 如果希望两个面板各自独立切换当前月份，可以使用 `unlink-panels` 属性解除联动。


:::demo
```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="Start date"
        end-placeholder="End date"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">With quick options</span>
      <el-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="至"
        start-placeholder="Start date"
        end-placeholder="End date"
        :shortcuts="shortcuts"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      shortcuts: [
        {
          text: 'Last week',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          },
        },
        {
          text: 'Last month',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          },
        },
        {
          text: 'Last 3 months',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          },
        },
      ],
      value1: '',
      value2: '',
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style>
.el-date-editor .el-range-separator{
    width: 10%;
}
</style>
```
:::


## 选择月份范围
可在一个选择器中便捷地选择一个月份范围

在选择日期范围时，默认情况下左右面板会联动。 如果希望两个面板各自独立切换当前年份，可以使用 `unlink-panels` 属性解除联动。

:::demo
```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="Start month"
        end-placeholder="End month"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">With quick options</span>
      <el-date-picker
        v-model="value2"
        type="monthrange"
        unlink-panels
        range-separator="至"
        start-placeholder="Start month"
        end-placeholder="End month"
        :shortcuts="shortcuts"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      shortcuts: [
        {
          text: 'This month',
          value: [new Date(), new Date()],
        },
        {
          text: 'This year',
          value: () => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
          },
        },
        {
          text: 'Last 6 months',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
          },
        },
      ],
      value1: '',
      value2: '',
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>
```
:::


## 默认值
日期选择器会在用户未选择任何日期的时候默认展示当天的日期。 你也可以使用 `default-value` 来修改这个默认的日期。 请注意该值需要是一个可以解析的 `new Date()` 对象。

如果类型是 `daterange`, `default-value` 则会设置左边窗口的默认值


:::demo
```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">date</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a date"
        :default-value="new Date(2010, 9, 1)"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">daterange</span>
      <el-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value1 = ref('')
    const value2 = ref('')

    return {
      value1,
      value2,
    }
  },
})
</script>
```
:::


## 日期格式
使用`format`指定输入框的格式。 使用 `value-format` 指定绑定值的格式。

默认情况下，组件接受并返回Date对象。

在 [这里](https://dayjs.fenxianglu.cn/category/parse.html#%E5%AD%97%E7%AC%A6%E4%B8%B2) 查看 Day.js 支持的 format 参数。

:::danger
请一定要注意传入参数的大小写是否正确
:::

:::demo
```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Emits Date object</span>
      <div class="demonstration">Value: {{ value1 }}</div>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">Use value-format</span>
      <div class="demonstration">Value：{{ value2 }}</div>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">Timestamp</span>
      <div class="demonstration">Value：{{ value3 }}</div>
      <el-date-picker
        v-model="value3"
        type="date"
        placeholder="Pick a Date"
        format="YYYY/MM/DD"
        value-format="x"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value1 = ref('')
    const value2 = ref('')
    const value3 = ref('')

    return {
      value1,
      value2,
      value3,
    }
  },
})
</script>
```
:::


## 默认显示日期
在选择日期范围时，你可以指定起始日期和结束日期的默认时间。

默认情况下，开始日期和结束日期的时间部分都是选择日期当日的 `00:00:00`。 通过 `default-time` 可以分别指定开始日期和结束日期的具体时刻。 它接受最多两个日期对象的数组。 其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻

:::demo
```vue
<template>
  <div class="demo-date-picker">
    <div class="block">
      <p>Component value：{{ value }}</p>
      <el-date-picker
        v-model="value"
        type="daterange"
        start-placeholder="Start date"
        end-placeholder="End date"
        :default-time="defaultTime"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('')
    const defaultTime = ref([
      new Date(2000, 1, 1, 0, 0, 0),
      new Date(2000, 2, 1, 23, 59, 59),
    ]) // '00:00:00', '23:59:59'

    return {
      value,
      defaultTime,
    }
  },
})
</script>
```
:::


## 自定义内容
弹出框的内容是可以自定义的，在插槽内你可以获取到当前单元格的数据

:::demo
```vue
<template>
  <div class="demo-date-picker">
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="Pick a day"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD"
    >
      <template #default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span class="text">{{ cell.text }}</span>
          <span v-if="isHoliday(cell)" class="holiday"></span>
        </div>
      </template>
    </el-date-picker>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('2021-10-29')

    const holidays = [
      '2021-10-01',
      '2021-10-02',
      '2021-10-03',
      '2021-10-04',
      '2021-10-05',
      '2021-10-06',
      '2021-10-07',
    ]

    function isHoliday({ dayjs }) {
      return holidays.includes(dayjs.format('YYYY-MM-DD'))
    }

    return {
      value,
      isHoliday,
    }
  },
})
</script>

<style lang="scss" scoped>
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
  .text {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
    line-height: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }

  &.current {
    .text {
      background: purple;
      color: #fff;
    }
  }
  .holiday {
    position: absolute;
    width: 6px;
    height: 6px;
    background: red;
    border-radius: 50%;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
```
:::