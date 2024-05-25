<template>
  <h2>{{ counter }}</h2>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter; // Using of Getters
      //   return this.$store.getters.finalResult; // Using of Getters
    },
  },
};
</script>
