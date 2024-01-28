import { defineComponent } from 'vite'
import vueJSX from './packages/plugin-vue-jsx/dist/index.mjs'

export default defineComponent({
    plugins: [vueJSX()]
})