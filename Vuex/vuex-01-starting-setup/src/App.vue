<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <final-result></final-result>
    <button @click="add">Add</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FinalResult from './components/FinalResult.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FinalResult,
  },
  methods: {
    add() {
      // this.$store.state.counter++; This is more error prone and tight coupled
      this.$store.commit('increment');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
