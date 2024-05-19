<template>
  <teleport to="body">
    <base-dialog
      v-if="isInvalidInput"
      title="Invalid Input"
      @close="confirmDialog"
    >
      <template #default>
        <p>Please enter a valid title, description and link.</p>
      </template>
      <template #actions>
        <base-button @click="confirmDialog">Okay</base-button>
      </template>
    </base-dialog>
  </teleport>
  <base-card>
    <form @submit.prevent="addResources">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          rows="3"
          name="description"
          id="description"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" ref="linkInput" />
      </div>
      <div class="form-control">
        <base-button type="submit"> Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      isInvalidInput: false,
    };
  },
  methods: {
    addResources() {
      const titleInput = this.$refs.titleInput.value;
      const descriptionInput = this.$refs.descriptionInput.value;
      const linkInput = this.$refs.linkInput.value;

      if (titleInput === '' || descriptionInput === '' || linkInput === '') {
        this.isInvalidInput = true;
        return;
      }

      this.addResource(titleInput, descriptionInput, linkInput);
    },
    confirmDialog() {
      this.isInvalidInput = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
