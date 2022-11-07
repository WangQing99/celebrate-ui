import { computed, defineComponent, unref } from 'vue'
import { ElCol } from 'element-plus'
import { getSlot } from '@celebrate-ui/utils'
import type { Recordable } from '@celebrate-ui/utils'
import type { PropType } from 'vue'
import type { FormProps, FormSchema } from '../types/form'

export default defineComponent({
  name: 'ElFormItem',
  props: {
    schema: {
      type: Object as PropType<FormSchema>,
      default: () => ({}),
    },
    formProps: {
      type: Object as PropType<FormProps>,
      default: () => ({}),
    },
    allDefaultValues: {
      type: Object as PropType<Recordable>,
      default: () => ({}),
    },
    formModel: {
      type: Object as PropType<Recordable>,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    const getValues = computed(() => {
      const { allDefaultValues, formModel, schema } = props
      const { mergeDynamicData } = props.formProps
      return {
        field: schema.field,
        model: formModel,
        values: {
          ...mergeDynamicData,
          ...allDefaultValues,
          ...formModel,
        } as Recordable,
        schema,
      }
    })

    function renderComponent() {
      // const {
      //   renderComponentContent,
      //   component,
      //   field,
      //   changeEvent = 'change',
      //   valueField,
      // } = props.schema
    }

    function renderItem() {
      const { field, label, slot, render } = props.schema

      const getContent = () => {
        return slot
          ? getSlot(slots, slot, unref(getValues))
          : render
          ? render(unref(getValues))
          : renderComponent()
      }

      return (
        <el-form-item props={field} label={label}>
          <div style="display:flex">
            <div style="flex:1;">{getContent()}</div>
          </div>
        </el-form-item>
      )
    }
    return () => {
      const { colSlot, renderColContent } = props.schema

      const values = unref(getValues)

      const getContent = () => {
        return colSlot
          ? getSlot(slots, colSlot, values)
          : renderColContent
          ? renderColContent(values)
          : renderItem()
      }

      return <ElCol>{getContent()}</ElCol>
    }
  },
})
