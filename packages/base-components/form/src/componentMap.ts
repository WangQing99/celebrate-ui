import { ElInput, ElSelect } from 'element-plus'
import type { Component } from 'vue'
import type { ComponentType } from './types'

const componentMap = new Map<ComponentType, Component>()

componentMap.set('Input', ElInput)
componentMap.set('Select', ElSelect)

export { componentMap }
