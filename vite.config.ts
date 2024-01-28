import { defineConfig } from 'vite'
import vueJSX from './packages/plugin-vue-jsx/dist/index.mjs'

export default defineConfig({
  plugins: [vueJSX()],
})
