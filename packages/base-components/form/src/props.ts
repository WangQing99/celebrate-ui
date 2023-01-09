import type { PropType } from 'vue'
import type { FormSchema } from './types/form'

export const basicProps = {
  // 表单配置规则
  schemas: {
    type: [Array] as PropType<FormSchema[]>,
    default: () => [],
  },
}
