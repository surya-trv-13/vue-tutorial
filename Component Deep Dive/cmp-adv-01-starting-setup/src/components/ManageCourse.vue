<template>
	<h2>Manage Course</h2>
	<input type="text" ref="course" />
	<button @click="validateInput">Submit</button>
	<!-- Teleport takes the component to a different parent body which will mnake the code sematically correct -->
	<teleport to="body">
		<alert-dialog v-if="isEmptyInput">
			<h2>The Input is empty</h2>
			<p>Please enter some value to continue</p>
			<button @click="closeDialog">Okay</button>
		</alert-dialog>
	</teleport>
</template>
<script>
import AlertDialog from "./AlertDialog.vue";

export default {
	components: { AlertDialog },
	data() {
		return {
			isEmptyInput: false,
		};
	},
	methods: {
		validateInput() {
			const inputVal = this.$refs.course.value;
			if (inputVal === "") {
				this.isEmptyInput = true;
			}
		},
		closeDialog() {
			this.isEmptyInput = false;
		},
	},
};
</script>
