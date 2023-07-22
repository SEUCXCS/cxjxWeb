import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUrlStore = defineStore('url', () => {
    // 本地mock数据
    const url = ref('http://127.0.0.1:4523/m1/2650283-0-default')
    // 测试数据
    // const url = ref('http://81.68.242.84:5438')
    // // 正式数据
    // const url = ref('http://api.cxjx.truraly.icu')
    const getUrl = () => {
        return url.value
    }

    return {
        getUrl
    }
})