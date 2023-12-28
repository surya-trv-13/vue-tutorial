const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			confirmedName: "",
		};
	},
	methods: {
		increment(num) {
			this.counter = this.counter + num;
		},
		decrement(num) {
			this.counter = this.counter - num;
		},
		setName(event, lastName) {
			this.name = event.target.value + " " + lastName;
		},
		submitForm() {
			alert("Form Submitted");
		},
		confirmName() {
			this.confirmedName = this.name;
		},
	},
});

app.mount("#events");
