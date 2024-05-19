<template>
  <button @click="onClick">Change to Team</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      savedChanges: false,
    };
  },
  methods: {
    onClick() {
      // Dynamically change the path
      this.$router.push('/teams');

      /*
      There are other methods as well
      this.$router.forward()
      this.$router.back()
      */
    },
    saveChanges() {
      this.savedChanges = true;
    },
  },
  // Component level Navigation Guard
  beforeRouteEnter(to, from, next) {
    console.log('User before Route Enter', to, from);
    next();
  },
  // This will be called before all the router beforeEach to confirm with the users about any unsaved changes wants to save
  beforeRouteLeave(to, from, next) {
    console.log('User before Route Leave', to, from);
    if (this.savedChanges) {
      next();
    } else {
      const answer = window.confirm('Are you sure?');
      next(answer);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
