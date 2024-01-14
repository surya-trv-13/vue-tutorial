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
		removeGoals(index) {
			this.goals.splice(index, 1);
		},
	},
});

app.mount("#user-goals");
