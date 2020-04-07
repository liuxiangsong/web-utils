export default {
  state: { numbers: [1] },
  getters: {
    getNumbers(state) {
      return state.numbers
    }
  },
  mutations: {
    addNumber(state, num) {
      state.numbers.push(Number(num))
    }
  },
  actions: {
    addNumber(context, num) {
      context.commit('addNumber', num)
    }
  }
}
