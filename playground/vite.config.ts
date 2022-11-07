import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    DefineOptions(),
    Pages({
      extensions: ['vue', 'md'],
    }),
  ],
})
