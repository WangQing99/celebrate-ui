<template>
  <div>
    <ce-form :schemas="schemas" />
  </div>
</template>

<script setup lang="ts">
const schemas = [
  {
    field: 'field1',
    component: 'Input',
    label: '基础字段111',
  },
  {
    field: 'field2',
    component: 'Select',
    label: '基础字段222',
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '1',
          key: '1',
        },
        {
          label: '选项2',
          value: '2',
          key: '2',
        },
      ],
    },
  },
]
</script>

<style scoped></style>
