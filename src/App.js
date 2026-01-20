import { ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <div>
      <h1>Vue3 Browser ESM</h1>
      <button @click="count++">
        Count: {{ count }}
      </button>
    </div>
  `
}
