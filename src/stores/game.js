import { defineStore } from 'pinia'

export const useGameStore = defineStore({
  id: 'game',
  state: () => ({
    savedGames: [],
    player: {
        name: null,

    }
  }),
  getters: {
    hasGames: (state) => state.savedGames.length > 0
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
