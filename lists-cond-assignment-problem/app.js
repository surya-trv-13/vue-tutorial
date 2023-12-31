const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			newTask: "",
			tasks: [],
			showList: true,
		};
	},
	methods: {
		addTask() {
			this.tasks.push(this.newTask);
			this.newTask = "";
		},
		showHideList() {
			this.showList = !this.showList;
		},
	},
});

app.mount("#assignment");
