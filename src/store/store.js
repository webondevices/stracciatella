class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState || this.reducer();
    this.listeners = [];
    this.valueListeners = [];
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  subscribeValue(value, listener) {
    this.valueListeners.push({ value, listener });
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener) => listener());
    this.valueListeners.forEach(({ value, listener }) =>
      listener(this.state[value] || null)
    );
  }
}

export default Store;
