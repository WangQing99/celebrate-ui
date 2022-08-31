<template>
  <div>
    <el-button>{{ message }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'

const message = ref('')
</script>

<style scoped></style>
