const store = {
    state: {
        numbers: []
    },
    addNumber(i) {
        this.state.numbers.push(Number(i))
    }
}
export default store