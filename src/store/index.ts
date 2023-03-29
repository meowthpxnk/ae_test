import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 1488,
    numberOfChanges: 0
  }),
  actions: {
    changeCounter(){
      this.counter += 1
    }
  }
})