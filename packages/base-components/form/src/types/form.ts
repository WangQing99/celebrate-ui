import type { Recordable } from '@celebrate-ui/utils'
import type { ComponentType } from './index'
import type { VNode } from 'vue'

export type FieldMapToTime = [string, [string, string], string?][]

export interface RenderCallbackParams {
  schema: FormSchema
  values: Recordable
  model: Recordable
  field: string
}

export interface FormProps {
  // 表单配置规则
  schemas?: FormSchema[]
  // 时间间隔字段被映射到多个
  fieldMapToTime?: FieldMapToTime
  transformDateFunc?: (date: any) => string
}

export interface FormSchema {
  // 字段名
  field: string
  // 内部值变化触发的事件名称 默认change
  changeEvent?: string
  // v-model 绑定的变量名 默认值
  valueField?: string
  // 标签名称
  label: string
  // 要渲染的组件类型
  component: ComponentType

  // 默认值
  defaultValue?: any

  // form-item 渲染的内容
  render?: (
    renderCallbackParams: RenderCallbackParams
  ) => VNode | VNode[] | string

  //
  renderColContent?: (
    renderCallbackParams: RenderCallbackParams
  ) => VNode | VNode[] | string

  renderComponentContent?:
    | ((renderCallbackParams: RenderCallbackParams) => any)
    | VNode
    | VNode[]
    | string
  // 自定义插槽 form-item
  slot?: string
  // 自定义插槽 renderColContent
  colSlot?: string
}
