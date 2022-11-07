<template>
  <ElForm>
    <ElRow>
      <FormItem />
    </ElRow>
  </ElForm>
</template>

<script lang="ts" setup>
import { ElForm, ElRow } from 'element-plus'
import FormItem from './components/FormItem'

defineOptions({
  name: 'CeForm',
})
</script>

<style scoped></style>
