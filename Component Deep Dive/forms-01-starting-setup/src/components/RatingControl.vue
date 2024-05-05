<!-- Custom form input -->
<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="toggleActive('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="toggleActive('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'good' }">
      <button type="button" @click="toggleActive('good')">Good</button>
    </li>
  </ul>
</template>

<script>
export default {
  // in order to user v-model 2 thing need to be done
  // 1. add props (modelValue) and emits(update:modelValue)
  // 2. add v-model directive
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    toggleActive(options) {
      this.$emit('update:modelValue', options);
    },
  },
};
</script>

<style>
.active {
  border-color: #aa0078;
}

.active button {
  color: #aa0078;
}
ul {
  list-style: none;
  margin: 0 0.5rem;
  display: flex;
  padding: 0;
}

li {
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}
</style>
