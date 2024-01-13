const app = Vue.createApp({
	data() {
		return {
			currentUserInput: "",
			message: "Vue is great!",
		};
	},
	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			// this.message = this.currentUserInput;
			this.message = this.$refs.userText.value; // The $ sign states that
		},
	},
});

app.mount("#app");

// Vue bind uses JS proxies to handle the data sent to UI.

// We can have more than one app for the vue, for example this.
const app2 = Vue.createApp({
	data() {
		return {
			messageVal: "Vue learning in app2",
		};
	},
});

app2.mount("#app2");

