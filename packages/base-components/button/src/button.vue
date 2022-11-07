<template>
  <div id="test-button">
    <el-button @click="handleClick"> 测试按钮 </el-button>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'

defineOptions({
  name: 'CeButton',
})

function handleClick(event: any) {
  console.info('🚀 ~ log:测试按钮event ----->', event)
}
</script>

<style scoped></style>
