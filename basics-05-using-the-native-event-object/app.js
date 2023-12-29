const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
		};
	},
	computed: {
		// This property methods only called when the dependency changes
		fullName() {
			// These methods needed to be return a result, it should not take any parameter nor any declaration inside the method
			console.log("Make changes");
			if (this.name === "") {
				return "";
			}
			return this.name + " " + "Rath";
		},
	},
	methods: {
		setName(event, lastName) {
			this.name = event.target.value + " " + lastName;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
		resetInput() {
			this.name = "";
		},
		// getFullName() {
		// 	console.log("Make changes");
		// 	if (this.name === "") {
		// 		return "";
		// 	}
		// 	return this.name + " " + "Rath";
		// },
	},
});

app.mount("#events");
