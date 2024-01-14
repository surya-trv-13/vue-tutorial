const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			userInput: "",
			toggleParagraph: true,
			bgColor: "",
		};
	},
	computed: {
		updateClasses() {
			// const classes = [];
			// if (this.userInput === "user1") {
			// 	classes.push("user1");
			// } else if (this.userInput === "user2") {
			// 	classes.push("user2");
			// }

			// if (this.toggleParagraph) {
			// 	classes.push("hidden");
			// } else {
			// 	classes.push("visible");
			// }

			// return classes;

			return {
				user1: this.userInput === "user1",
				user2: this.userInput === "user2",
				visible: this.toggleParagraph,
				hidden: !this.toggleParagraph,
			};
		},
	},
	methods: {
		toggleAction() {
			this.toggleParagraph = !this.toggleParagraph;
		},
	},
});

app.mount("#assignment");
