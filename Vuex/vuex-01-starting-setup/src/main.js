import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);

// Vuex logic
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value; // payload is the value we pass in
    },
  },
  getters: {
    finalResult(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      // getters will get all the other getter in the store
      const finalResult = getters.finalResult;
      if (finalResult < 0) {
        return 0;
      } else if (finalResult > 100) {
        return 100;
      }

      return finalResult;
    },
  },
});
app.use(store);

app.mount('#app');
