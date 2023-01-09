import { computed, defineComponent, toRefs, unref } from 'vue'
import { ElCol, ElFormItem } from 'element-plus'
import { getSlot, isFunction } from '@celebrate-ui/utils'
import { upperFirst } from 'lodash-es'
import { componentMap } from '../componentMap'
import type { Nullable, Recordable } from '@celebrate-ui/utils'
import type { PropType, Ref } from 'vue'
import type { FormProps, FormSchema } from '../types/form'

export default defineComponent({
  name: 'CeFormItem',
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
    setFormModel: {
      type: Function as PropType<(key: string, value: any) => void>,
      default: null,
    },
  },
  setup(props, { slots }) {
    const { schema, formProps } = toRefs(props) as {
      schema: Ref<FormSchema>
      formProps: Ref<FormProps>
    }

    console.table({ schema, formProps })

    const getValues = computed(() => {
      const { schema, formModel } = props
      return {
        field: schema.field,
        schema,
        model: formModel,
        values: {
          ...formModel,
        } as Recordable,
      }
    })

    function renderComponent() {
      const {
        renderComponentContent,
        component,
        field,
        changeEvent = 'change',
        valueField,
      } = props.schema

      const isCheck = component && ['Switch', 'Checkbox'].includes(component)

      const eventKey = `on${upperFirst(changeEvent)}`

      const on = {
        [eventKey]: (...args: Nullable<Recordable>[]) => {
          const [e] = args
          if (propsData[eventKey]) {
            propsData[eventKey](...args)
          }
          const target = e ? e.target : null
          const value = target ? (isCheck ? target.checked : target.value) : e

          props.setFormModel(field, value)
        },
      }

      const Comp = componentMap.get(component) as ReturnType<
        typeof defineComponent
      >

      const propsData: Recordable = {}

      const bindValue: Recordable = {
        [valueField || (isCheck ? 'checked' : 'value')]: props.formModel[field],
      }

      const compAttr: Recordable = {
        ...propsData,
        ...on,
        ...bindValue,
      }

      console.log(compAttr)

      if (!renderComponentContent) {
        return <Comp {...compAttr} v-model={props.formModel[field]} />
      }
      const compSlot = isFunction(renderComponentContent)
        ? { ...renderComponentContent(unref(getValues)) }
        : {
            default: () => renderComponentContent,
          }
      return <Comp {...compAttr}>{compSlot}</Comp>
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
        <ElFormItem props={field} label={label}>
          <div style="display:flex">
            <div style="flex:1;">{getContent()}</div>
          </div>
        </ElFormItem>
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
