<template>
  <button @click="add10">Add 10</button>
</template>

<script>
export default {
  methods: {
    add10() {
      //   this.$store.commit('increase', {value: 10});
      this.$store.commit({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>
