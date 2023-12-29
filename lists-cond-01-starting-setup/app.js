const app = Vue.createApp({
	data() {
		return {
			enteredValue: "",
			goals: [],
		};
	},
	methods: {
		addGoals() {
			this.goals.push(this.enteredValue);
			this.enteredValue = "";
		},
	},
});

app.mount("#user-goals");
