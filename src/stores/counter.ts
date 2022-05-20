import { defineStore } from 'pinia'

export const usePointsCounterStore = defineStore({
  id: 'pointsCounter',
  state: () => ({
    points: 0
  }),
  actions: {
    restart() {
      this.points = 0
    },
    increment() {
      this.points++
    },
    decrease() {
      this.points--
    }
  }
})
