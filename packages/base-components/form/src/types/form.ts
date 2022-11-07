import type { Recordable } from '@celebrate-ui/utils'
import type { ComponentType } from './index'
import type { VNode } from 'vue'

export interface RenderCallbackParams {
  schema: FormSchema
  values: Recordable
  model: Recordable
  field: string
}

export interface FormProps {
  // 用于合并到动态控件表单项中的函数值
  mergeDynamicData?: Recordable
}

export interface FormSchema {
  // 字段名
  field: string
  // 内部值变化触发的事件名称 默认change
  changeEvent?: string
  // 标签名称
  label: string | VNode
  // 要渲染的组件类型
  component: ComponentType

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
