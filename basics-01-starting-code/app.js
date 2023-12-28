const { createApp } = Vue;

const app = createApp({
	data() {
		// It can be added a Data which takes a method and always return a JS Object
		return {
			courseGoalA: "<h3>Learn Vue</h3>", // data can return anything required
			courseGoalB: "Master Vue", // data can return anything required
			vueLink: "https://vuejs.org/",
		};
	},
	methods: {
		outputGoal() {
			const randomNumber = Math.random();
			if (randomNumber < 0.5) {
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		},
	},
});

app.mount("#user-goal"); // We can point to the attribute using CSS property for the mounting of Vue to be controlled by Vue
