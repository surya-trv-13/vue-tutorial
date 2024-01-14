const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			counter: 0,
		};
	},
	watch: {
		updateResult() {
			const that = this;
			setTimeout(() => {
				that.counter = 0;
			}, 5000);
		},
	},
	computed: {
		updateResult() {
			if (this.counter < 37) {
				return "Not there yet";
			} else if (this.counter > 37) {
				return "Too much !";
			} else {
				return this.counter;
			}
		},
	},
	methods: {
		addIncrement(num) {
			console.log("Here");
			this.counter = this.counter + num;
		},
	},
});

app.mount("#assignment");
