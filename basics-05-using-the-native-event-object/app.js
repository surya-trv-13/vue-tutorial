const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			lastName: "",
		};
	},
	watch: {
		// Watcher is only be called when we want to make some changes after dependency changes
		counter(value, oldValue) {
			// In watcher the method name should be same as the data name.
			console.log(value, oldValue);
			if (value > 50) {
				const that = this;
				setTimeout(() => {
					that.counter = 0;
				}, 2000);
			}
		},
	},
	computed: {
		// This property methods only called when the dependency changes
		fullName() {
			// These methods needed to be return a result, it should not take any parameter nor any declaration inside the method
			console.log("Make changes");
			if (this.name === "" || this.lastName === "") {
				return "";
			}
			return this.name + " " + this.lastName;
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
			this.lastName = "";
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
