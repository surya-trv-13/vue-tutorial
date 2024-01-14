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
	// Before Initialization
	beforeCreate() {
		console.log("Before Created");
	},
	// After initialization
	created() {
		console.log("Created");
	},
	// Before mount
	beforeMount() {
		console.log("Before Mounted");
	},

	// After mount
	mounted() {
		console.log("Mounted");
	},
	// This is recursive every update it changes
	beforeUpdate() {
		console.log("Before Update");
	},
	updated() {
		console.log("Updated");
	},
	beforeUnmount() {
		console.log("Before Unmount");
	},
	unmounted() {
		console.log("Unmounted");
	},
});

app.mount("#app");

setTimeout(() => {
	app.unmount();
}, 5000);

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

