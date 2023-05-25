import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounter =  defineStore('counter', {
    state: () => {
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            this.count++
        }
    },
    getters: {

    }
})