<template>
  <ElForm :model="formModel">
    <ElRow>
      <template v-for="schema in getSchema" :key="schema.field">
        <FormItem
          :schema="schema"
          :form-props="getProps"
          :form-model="formModel"
          :set-form-model="setFormModel"
        />
      </template>
    </ElRow>
  </ElForm>
</template>

<script lang="ts" setup>
import { computed, reactive, unref, ref, watch, useAttrs } from 'vue'
import { ElForm, ElRow } from 'element-plus'
import FormItem from './components/FormItem'
import { basicProps } from './props'
import { useFormValues } from './hooks/useFormValues'
import type { Recordable } from '@celebrate-ui/utils/types'
import type { FormProps, FormSchema } from './types/form'

defineOptions({
  name: 'CeForm',
})

const props = defineProps(basicProps)
const attrs = useAttrs()
console.info('🚀 ~ log:props.schemas ----->', props.schemas)

const formModel = reactive<Recordable>({})

const defaultValueRef = ref<Recordable>({})
const isInitedDefaultRef = ref(false)

// const emit = defineEmits(['submit', 'reset'])

// 获取表单的基本配置
const getProps = computed(() => {
  return { ...props } as FormProps
})

// 获取表单的schema
const getSchema = computed(() => {
  const schemas: FormSchema[] = unref(getProps).schemas as any

  return schemas as FormSchema[]
})

const getBindValue = computed(
  () => ({ ...attrs, ...props, ...unref(getProps) } as Recordable)
)

const { initDefault } = useFormValues({
  defaultValueRef,
  getSchema,
  formModel,
  getProps,
})

watch(
  () => getSchema.value,
  (schema) => {
    if (unref(isInitedDefaultRef)) {
      return
    }
    if (schema?.length) {
      initDefault()
      isInitedDefaultRef.value = true
    }
  },
  { immediate: true }
)

function validateFields(nameList?: any[] | undefined) {
  return true
}

function setFormModel(key: string, value: any) {
  formModel[key] = value
  const { validateTrigger } = unref(getBindValue)
  if (!validateTrigger || validateTrigger === 'change') {
    validateFields([key])
  }
}
</script>

<style scoped></style>
